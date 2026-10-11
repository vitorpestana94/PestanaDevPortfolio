import { useTranslations } from "next-intl";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateBoard } from "@/hooks/api/board/mutations";
import { setBoard } from "@/utils/board/boardCacheHandlers";
import Interface, { EditableBoardField } from "./ScrumBoardHeaderDivInterface";

export default function useScrumBoardHeaderDiv({ board }: Interface) {
   const t = useTranslations("scrumBoard.board");
   const queryClient = useQueryClient();
   const { mutateAsync: updateBoard, isPending: isUpdating } = useUpdateBoard();

   async function update(field: EditableBoardField, value: string) {
      const hasChanged = value !== (board[field] ?? "");
      const isEmptyName = field === "name" && !value;

      if (isUpdating || !hasChanged || isEmptyName) return;

      await updateBoard({ boardId: board.id, request: { [field]: value } });

      setBoard(queryClient, board.id, { ...board, [field]: value });
      queryClient.invalidateQueries({ queryKey: ["getBoards"] });
   }

   return { t, update };
}
