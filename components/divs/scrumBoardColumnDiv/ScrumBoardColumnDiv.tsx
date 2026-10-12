"use client";

import Interface from "./ScrumBoardColumnDivInterface";
import useScrumBoardColumnDiv from "./useScrumBoardColumnDiv";
import { Column } from "@/components/ui/kanban-board";
import Icon from "@/components/icons/Icons";

export default function ScrumBoardColumnDiv(props: Interface) {
   const { column } = props;
   const { t, isRenaming, setIsRenaming, rename } = useScrumBoardColumnDiv(props);

   return (
      <div className="flex flex-col gap-y-3 min-h-60 lg:min-h-110 rounded-2xl p-3 bg-[#11182773] border border-[#38b6ff]/30">
         <div className="flex-1 grid">
            <Column
               column={column}
               dragState={props.dragState}
               setDragState={props.setDragState}
               onDrop={props.onDrop}
               onCardClick={props.onCardClick}
            />
         </div>
         {isRenaming ? (
            <input
               autoFocus
               defaultValue={column.title}
               maxLength={50}
               onBlur={(event) => rename(event.target.value.trim())}
               onKeyDown={(event) => event.key === "Enter" && event.currentTarget.blur()}
               className="scrumBoardInput w-[70%] self-center text-center text-xs py-2"
            />
         ) : (
            <span className="relative flex justify-center items-center">
               <button
                  type="button"
                  className="scrumBoardButton"
                  onClick={() => props.onAddTask(column.id)}
               >
                  {t("addTask")}
               </button>
               <button
                  type="button"
                  className="absolute right-1 cursor-pointer group"
                  onClick={() => setIsRenaming(true)}
               >
                  <Icon
                     iconName="pencil"
                     className="aspect-square w-3.5 stroke-[#bfbfbf] group-hover:stroke-[#38b6ff]"
                  />
               </button>
            </span>
         )}
      </div>
   );
}
