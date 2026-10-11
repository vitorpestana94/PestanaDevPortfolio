import { useState } from "react";
import { useTranslations } from "next-intl";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateColumn } from "@/hooks/api/board/mutations";
import UpdateColumnRequest from "@/models/interfaces/dtos/requests/board/UpdateColumnRequest";
import Interface from "./ScrumBoardColumnDivInterface";

export default function useScrumBoardColumnDiv({ boardId, column }: Interface) {
   const t = useTranslations("scrumBoard.board");
   const queryClient = useQueryClient();
   const [isRenaming, setIsRenaming] = useState<boolean>(false);

   const { mutateAsync: updateColumn, isPending: isUpdatingColumn } = useUpdateColumn();

   async function updateColumnAndRefetch(request: UpdateColumnRequest) {
      if (isUpdatingColumn) return;

      await updateColumn({ boardId, columnId: column.id, request });

      // A column change can shift the position of the other columns, so the board is refetched.
      queryClient.invalidateQueries({ queryKey: ["getBoard", boardId] });
   }

   async function rename(name: string) {
      setIsRenaming(false);

      if (!name || name === column.title) return;

      await updateColumnAndRefetch({ name });
   }

   async function move(position: number) {
      await updateColumnAndRefetch({ position });
   }

   return {
      t,
      isRenaming,
      setIsRenaming,
      rename,
      move,
   };
}
