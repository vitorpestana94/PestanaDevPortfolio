import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetBoard } from "@/hooks/api/board/queries";
import { useAcceptInvitation, useMoveTask, useDeleteTask } from "@/hooks/api/board/mutations";
import useBoardHub from "@/hooks/useBoardHub";
import { DragState } from "@/components/ui/kanban-board";
import { moveTask, removeTask, removeBoardFromList } from "@/utils/board/boardCacheHandlers";
import getKanbanColumns from "@/utils/board/getKanbanColumns";
import { getErrorCode } from "@/utils/errors/errorMessagesHandlers";
import { toastError } from "@/utils/errors/toastHandlers";

const alreadyAMember = "F5C7";

export default function useScrumBoardSection(boardId: string) {
   const t = useTranslations();
   const locale = useLocale();
   const router = useRouter();
   const searchParams = useSearchParams();
   const queryClient = useQueryClient();
   const { data: session, update } = useSession();
   const myUserId = session?.user.id;

   const shouldAcceptInvitation = searchParams.get("acceptInvitation") === "true";
   const invitationRequested = useRef<boolean>(false);
   const [isInvitationHandled, setIsInvitationHandled] = useState<boolean>(!shouldAcceptInvitation);
   const isLeaving = useRef<boolean>(false);
   const [hasLeft, setHasLeft] = useState<boolean>(false);

   const [dragState, setDragState] = useState<DragState>(null);
   const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
   const [creatingTaskColumnId, setCreatingTaskColumnId] = useState<string | null>(null);

   const { data, error } = useGetBoard(boardId, isInvitationHandled && !hasLeft);
   const { mutateAsync: acceptInvitation } = useAcceptInvitation();
   const { mutateAsync: moveTaskToColumn } = useMoveTask();
   const { mutateAsync: deleteTask } = useDeleteTask();

   const boardData = data?.data;

   async function leaveBoard() {
      if (isLeaving.current) return;

      isLeaving.current = true;

      setHasLeft(true);
      removeBoardFromList(queryClient, boardId);

      await update({ lastBoardId: "" });

      queryClient.invalidateQueries({ queryKey: ["getBoard", boardId], refetchType: "none" });
      queryClient.invalidateQueries({ queryKey: ["getBoardMembers", boardId], refetchType: "none" });
      queryClient.invalidateQueries({ queryKey: ["getBoards"] });

      router.replace(`/${locale}/scrum-board`);
   }

   async function moveDroppedTask(taskId: string, fromColumnId: string, toColumnId: string) {
      if (fromColumnId === toColumnId) return;

      moveTask(queryClient, boardId, taskId, toColumnId);

      try {
         await moveTaskToColumn({ boardId, taskId, columnId: toColumnId });
      } catch {
         queryClient.invalidateQueries({ queryKey: ["getBoard", boardId] });
      }
   }

   async function deleteDraggedTask() {
      if (!dragState) return;

      const taskId = dragState.cardId;

      setDragState(null);

      await deleteTask({ boardId, taskId });

      removeTask(queryClient, boardId, taskId);
   }

   useBoardHub({ boardId, myUserId, leaveBoard });

   useEffect(() => {
      if (!shouldAcceptInvitation || !session?.user.email || invitationRequested.current) return;

      invitationRequested.current = true;

      acceptInvitation({
         boardId,
         request: { email: session.user.email, clientLocale: locale },
      })
         .catch((error: Error) => {
            const errorCode = getErrorCode(error.message);

            if (errorCode !== alreadyAMember) {
               toastError(t(`error.${errorCode}`));
            }
         })
         .finally(() => {
            setIsInvitationHandled(true);
            router.replace(`/${locale}/scrum-board/${boardId}`);
         });
   }, [session?.user.email]);

   useEffect(() => {
      if (boardData && session && session.lastBoardId !== boardId) {
         update({ lastBoardId: boardId });
      }
   }, [boardData]);

   useEffect(() => {
      if (error) {
         leaveBoard();
      }
   }, [error]);

   function closeTaskDrawer() {
      setEditingTaskId(null);
      setCreatingTaskColumnId(null);
   }

   const editingTask = boardData?.tasks.find((task) => task.id === editingTaskId);

   return {
      boardData,
      myUserId,
      columns: boardData ? getKanbanColumns(boardData, locale, t("scrumBoard.board.deadline")) : [],
      isOwner: boardData?.board.ownerId === myUserId,
      editingTask,
      creatingTaskColumnId,
      showTaskDrawer: editingTask !== undefined || creatingTaskColumnId !== null,
      dragState,
      setDragState,
      setEditingTaskId,
      setCreatingTaskColumnId,
      closeTaskDrawer,
      leaveBoard,
      moveDroppedTask,
      deleteDraggedTask,
   };
}
