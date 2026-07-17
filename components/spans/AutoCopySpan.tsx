"use client";

import options from "@/data/options.json";

export default function AutoCopySpan() {
   const email: string = options.email;

   function copyEmail(): void {
      navigator.clipboard.writeText(email);
   }

   return (
      <span
         className={`cursor-pointer hoverPestana`}
         onClick={() => copyEmail()}
      >
         {email}
      </span>
   );
}
