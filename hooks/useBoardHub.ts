"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useQueryClient } from "@tanstack/react-query";
import { getSession, signOut } from "next-auth/react";
import * as signalR from "@microsoft/signalr";
import { boardHub } from "@/constants/httpConstants";
import AuthServiceClient from "@/services/AuthServiceClient";
import Board from "@/models/interfaces/dtos/board/Board";
import BoardTask from "@/models/interfaces/dtos/board/BoardTask";
import BoardColumn from "@/models/interfaces/dtos/board/BoardColumn";
import BoardMember from "@/models/interfaces/dtos/board/BoardMember";
import BoardNotification from "@/models/interfaces/dtos/board/BoardNotification";
import TaskDeadlineChanged from "@/models/interfaces/dtos/board/TaskDeadlineChanged";
import { getDeadlineAsLocaleString } from "@/utils/dates/deadlineHandlers";
import { toastInfo } from "@/utils/errors/toastHandlers";
import {
   upsertTask,
   removeTask,
   setColumns,
   setBoard,
   addMember,
   removeMember,
} from "@/utils/board/boardCacheHandlers";

const unauthorized = 401;

function isUnauthorized(error: unknown) {
   return (error as { status?: number })?.status === unauthorized;
}

async function requestHubToken() {
   const { token } = await AuthServiceClient.GetHubToken();

   return token;
}

export default function useBoardHub({
   boardId,
   myUserId,
   leaveBoard,
}: {
   boardId: string;
   myUserId?: string;
   leaveBoard: () => void;
}) {
   const queryClient = useQueryClient();
   const t = useTranslations("scrumBoard.notifications");
   const locale = useLocale();

   async function getHubToken() {
      try {
         return await requestHubToken();
      } catch (error) {
         if (!isUnauthorized(error)) throw error;
      }

      await getSession();

      try {
         return await requestHubToken();
      } catch (error) {
         if (isUnauthorized(error)) {
            await signOut({
               callbackUrl: `/${locale}/authentication/login?redirectTo=scrum-board/${boardId}`,
            });
         }

         throw error;
      }
   }

   function showDeadlineToast({ taskName, oldDeadline, newDeadline }: TaskDeadlineChanged) {
      if (!newDeadline) {
         toastInfo(t("deadlineRemoved", { task: taskName }));

         return;
      }

      const deadline = getDeadlineAsLocaleString(newDeadline, locale);

      toastInfo(
         oldDeadline
            ? t("deadlineChanged", { task: taskName, deadline })
            : t("deadlineSet", { task: taskName, deadline }),
      );
   }

   useEffect(() => {
      if (!myUserId) return;

      const connection = new signalR.HubConnectionBuilder()
         .withUrl(boardHub, { accessTokenFactory: getHubToken })
         .withAutomaticReconnect()
         .build();

      const fromOthers =
         <T>(handler: (notification: BoardNotification<T>) => void) =>
         (notification: BoardNotification<T>) => {
            if (notification.changedBy !== myUserId) handler(notification);
         };

      connection.on("TaskCreated", fromOthers<BoardTask>((n) => upsertTask(queryClient, boardId, n.data)));
      connection.on("TaskUpdated", fromOthers<BoardTask>((n) => upsertTask(queryClient, boardId, n.data)));
      connection.on("TaskDeadlineChanged", fromOthers<TaskDeadlineChanged>((n) => showDeadlineToast(n.data)));
      connection.on("TaskDeleted", fromOthers<string>((n) => removeTask(queryClient, boardId, n.data)));
      connection.on("ColumnsUpdated", fromOthers<BoardColumn[]>((n) => setColumns(queryClient, boardId, n.data)));
      connection.on("MemberAdded", fromOthers<BoardMember>((n) => addMember(queryClient, boardId, n.data)));
      connection.on(
         "BoardUpdated",
         fromOthers<Board>((n) => {
            setBoard(queryClient, boardId, n.data);
            queryClient.invalidateQueries({ queryKey: ["getBoards"] });
         }),
      );
      connection.on("BoardDeleted", () => leaveBoard());
      connection.on("MemberRemoved", (n: BoardNotification<string>) =>
         n.data === myUserId ? leaveBoard() : removeMember(queryClient, boardId, n.data),
      );

      connection.onreconnected(async () => {
         await connection.invoke("JoinBoard", boardId);

         queryClient.invalidateQueries({ queryKey: ["getBoard", boardId] });
         queryClient.invalidateQueries({ queryKey: ["getBoardMembers", boardId] });
      });

      const connectionStart = connection
         .start()
         .then(() => connection.invoke("JoinBoard", boardId))
         .catch(() => {});

      return () => {
         connectionStart
            .then(() => connection.invoke("LeaveBoard", boardId))
            .catch(() => {})
            .finally(() => connection.stop());
      };
   }, [boardId, myUserId]);
}
