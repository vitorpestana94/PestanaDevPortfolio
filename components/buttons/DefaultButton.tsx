"use client";

import { ReactNode } from "react";

export default function DefaultButton({
   label,
   styles,
   ...props
}: React.ComponentProps<"button"> & { styles?: string; label: string }) {
   return (
      <button
         className={`loginInputsDivs lg:py-2! xxs:min-h-6 xs:min-h-9 relative w-4/12 shadow-2xs shadow-black text-shadow-2xs text-shadow-black border-black 
         xxs:0ext-[0.625rem] xs:text-[0.75rem] bg-[#38b6ff] text-white cursor-pointer flex justify-center items-center self-center max-w-50  
         ${styles}`}
         type="button"
         {...props}
      >
         <p>{label}</p>
      </button>
   );
}
