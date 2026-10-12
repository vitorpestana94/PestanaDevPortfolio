import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useQueryClient } from "@tanstack/react-query";
import { useGetBoardMembers } from "@/hooks/api/board/queries";
import { useAddMember, useRemoveMember } from "@/hooks/api/board/mutations";
import { removeMember as removeMemberFromCache } from "@/utils/board/boardCacheHandlers";
import { toastSuccess } from "@/utils/errors/toastHandlers";
import isEmailValid from "@/utils/strings/verifyEmailFormat";
import Interface from "../ScrumBoardMenuSpanInterface";

export default function useMembersDropdown({ boardId, myUserId, leaveBoard }: Interface) {
   const t = useTranslations("scrumBoard.board");
   const locale = useLocale();
   const queryClient = useQueryClient();
   const [email, setEmail] = useState<string>("");

   const { data } = useGetBoardMembers(boardId);
   const { mutateAsync: addMember, isPending: isAdding } = useAddMember();
   const { mutateAsync: removeMember, isPending: isRemoving } = useRemoveMember();

   async function add() {
      if (isAdding || !isEmailValid(email)) return;

      const { invitationSent } = await addMember({
         boardId,
         request: { email, clientLocale: locale },
      });

      toastSuccess(invitationSent ? t("invitationSent") : t("memberAdded"));
      setEmail("");

      if (!invitationSent) {
         queryClient.invalidateQueries({ queryKey: ["getBoardMembers", boardId] });
         queryClient.invalidateQueries({ queryKey: ["getBoard", boardId] });
      }
   }

   async function remove(userId: string) {
      if (isRemoving) return;

      await removeMember({ boardId, userId });

      if (userId === myUserId) {
         leaveBoard();
      } else {
         removeMemberFromCache(queryClient, boardId, userId);
      }
   }

   return {
      t,
      email,
      members: data?.members ?? [],
      isAdding,
      isEmailValid: isEmailValid(email),
      setEmail,
      add,
      remove,
   };
}
