"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useQueryClient } from "@tanstack/react-query";
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

async function getAccessToken() {
   const { token } = await AuthServiceClient.GetAccessToken();

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
         .withUrl(boardHub, { accessTokenFactory: getAccessToken })
         .withAutomaticReconnect()
         .build();

      // My own changes are already applied by the REST responses.
      const fromOthers =
         <T>(handler: (notification: BoardNotification<T>) => void) =>
         (notification: BoardNotification<T>) => {
            if (notification.changedBy !== myUserId) handler(notification);
         };

      connection.on("TaskCreated", fromOthers<BoardTask>((n) => upsertTask(queryClient, boardId, n.data)));
      connection.on("TaskUpdated", fromOthers<BoardTask>((n) => upsertTask(queryClient, boardId, n.data)));
      // The task itself was already updated by the "TaskUpdated" event, which always comes first.
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

      // Groups are lost on reconnect and events are not stored, so it joins again and resyncs.
      connection.onreconnected(async () => {
         await connection.invoke("JoinBoard", boardId);

         queryClient.invalidateQueries({ queryKey: ["getBoard", boardId] });
         queryClient.invalidateQueries({ queryKey: ["getBoardMembers", boardId] });
      });

      const connectionStart = connection
         .start()
         .then(() => connection.invoke("JoinBoard", boardId))
         .catch(() => {});

      // Stopping it while it's still negotiating throws an error (it happens with React Strict Mode on development),
      // so it waits the start to finish first.
      return () => {
         connectionStart
            .then(() => connection.invoke("LeaveBoard", boardId))
            .catch(() => {})
            .finally(() => connection.stop());
      };
   }, [boardId, myUserId]);
}
