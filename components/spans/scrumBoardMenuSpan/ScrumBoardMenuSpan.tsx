"use client";

import Interface from "./ScrumBoardMenuSpanInterface";
import useScrumBoardMenuSpan from "./useScrumBoardMenuSpan";
import DropdownButton from "./subComponents/DropdownButton";
import BoardsDropdown from "./subComponents/BoardsDropdown";
import MembersDropdown from "./subComponents/MembersDropdown";
import CreateScrumBoardDrawer from "@/components/drawers/createScrumBoardDrawer/CreateScrumBoardDrawer";
import Icon from "@/components/icons/Icons";

export default function ScrumBoardMenuSpan(props: Interface) {
   const { t, showCreateDrawer, setShowCreateDrawer, removeBoard } = useScrumBoardMenuSpan(props);

   return (
      <span className="flex flex-wrap items-center gap-3 self-end lg:self-start">
         <DropdownButton
            label={t("newBoard")}
            iconName="pencil"
            onClick={() => setShowCreateDrawer(true)}
         />
         <BoardsDropdown boardId={props.boardId} boardName={props.boardName} />
         <MembersDropdown {...props} />
         {props.isOwner && (
            <button
               type="button"
               title={t("deleteBoard")}
               className="scrumBoardButton group hover:border-[#38b6ff]/30"
               onClick={removeBoard}
            >
               <Icon
                  iconName="trash"
                  className="aspect-square w-3.5 stroke-[#bfbfbf] group-hover:stroke-red-600"
               />
            </button>
         )}
         {showCreateDrawer && <CreateScrumBoardDrawer close={() => setShowCreateDrawer(false)} />}
      </span>
   );
}
