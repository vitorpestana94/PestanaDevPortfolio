import { useState } from "react";
import { useTranslations } from "next-intl";
import { useDeleteBoard } from "@/hooks/api/board/mutations";
import Interface from "./ScrumBoardMenuSpanInterface";

export default function useScrumBoardMenuSpan({ boardId, leaveBoard }: Interface) {
   const t = useTranslations("scrumBoard.board");
   const [showCreateDrawer, setShowCreateDrawer] = useState<boolean>(false);
   const { mutateAsync: deleteBoard, isPending: isDeleting } = useDeleteBoard();

   async function removeBoard() {
      if (isDeleting || !window.confirm(t("deleteBoardConfirmation"))) return;

      await deleteBoard({ boardId });

      leaveBoard();
   }

   return { t, showCreateDrawer, setShowCreateDrawer, removeBoard };
}
