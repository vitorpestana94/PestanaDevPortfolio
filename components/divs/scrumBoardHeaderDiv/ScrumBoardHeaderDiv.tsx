"use client";

import Interface from "./ScrumBoardHeaderDivInterface";
import useScrumBoardHeaderDiv from "./useScrumBoardHeaderDiv";

export default function ScrumBoardHeaderDiv(props: Interface) {
   const { board, isOwner } = props;
   const { t, update } = useScrumBoardHeaderDiv(props);

   return (
      <div className="flex flex-col gap-y-2 w-full lg:w-1/2">
         <input
            key={board.name}
            defaultValue={board.name}
            readOnly={!isOwner}
            maxLength={100}
            onBlur={(event) => update("name", event.target.value.trim())}
            className={`azulPestana font-abril bg-transparent focus:outline-none w-full
            text-[1.5rem] sm:text-[2rem] xl:text-[2.5rem] ${isOwner ? "" : "pointer-events-none"}`}
         />
         <input
            key={board.description}
            defaultValue={board.description ?? ""}
            placeholder={isOwner ? t("description") : ""}
            readOnly={!isOwner}
            onBlur={(event) => update("description", event.target.value.trim())}
            className={`subTitleParagraph max-w-none! text-start! bg-transparent focus:outline-none placeholder:text-[#808080] ${isOwner ? "" : "pointer-events-none"}`}
         />
      </div>
   );
}
