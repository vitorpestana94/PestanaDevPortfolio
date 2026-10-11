import { useState } from "react";
import { useTranslations } from "next-intl";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateColumn } from "@/hooks/api/board/mutations";
import Interface from "./ScrumBoardColumnDivInterface";

export default function useScrumBoardColumnDiv({ boardId, column }: Interface) {
   const t = useTranslations("scrumBoard.board");
   const queryClient = useQueryClient();
   const [isRenaming, setIsRenaming] = useState<boolean>(false);

   const { mutateAsync: updateColumn, isPending: isUpdatingColumn } = useUpdateColumn();

   async function rename(name: string) {
      setIsRenaming(false);

      if (isUpdatingColumn || !name || name === column.title) return;

      await updateColumn({ boardId, columnId: column.id, request: { name } });

      queryClient.invalidateQueries({ queryKey: ["getBoard", boardId] });
   }

   return {
      t,
      isRenaming,
      setIsRenaming,
      rename,
   };
}
