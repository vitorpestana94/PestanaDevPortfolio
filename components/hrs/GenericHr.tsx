import React from "react";
export default function GenericHr({
   text,
   className,
}: {
   text: string;
   className?: string;
}) {
   return (
      <div
         className={`flex items-center w-[70%] sm:w-[60%] self-center ${className}`}
      >
         <div className="flex w-full border-t border-gray-500"></div>
         <span className="px-3 text-gray-500 xxs:text-[0.625rem] xs:text-[0.875rem] text-[0.5rem]! font-medium text-nowrap">
            {text}
         </span>
         <div className="flex w-full border-t border-gray-500"></div>
      </div>
   );
}
