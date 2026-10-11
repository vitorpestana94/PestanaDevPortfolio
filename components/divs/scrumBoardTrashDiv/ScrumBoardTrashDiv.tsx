"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Icon from "@/components/icons/Icons";

export default function ScrumBoardTrashDiv({
   isDragging,
   onDrop,
}: {
   isDragging: boolean;
   onDrop: () => void;
}) {
   const t = useTranslations("scrumBoard.board");
   const [isOver, setIsOver] = useState<boolean>(false);

   if (!isDragging) return null;

   return (
      <div
         onDragOver={(event) => {
            event.preventDefault();
            setIsOver(true);
         }}
         onDragLeave={() => setIsOver(false)}
         onDrop={(event) => {
            event.preventDefault();
            setIsOver(false);
            onDrop();
         }}
         className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-x-3 rounded-full px-8 py-4
         bg-[#242424] border text-[0.625rem] lg:text-xs ${isOver ? "border-red-600 text-red-600" : "border-[#38b6ff]/30 text-[#bfbfbf]"}`}
      >
         <Icon
            iconName="trash"
            className={`aspect-square w-5 ${isOver ? "stroke-red-600" : "stroke-[#bfbfbf]"}`}
         />
         {t("trash")}
      </div>
   );
}
