import { useState, useRef } from "react";
import useHandleMouseDown from "@/hooks/useHandleKeyDown";

export default function useDropdown() {
   const [open, setOpen] = useState<boolean>(false);
   const dropdownRef = useRef<HTMLDivElement>(null);

   useHandleMouseDown({
      shouldHandleNow: open,
      ref: dropdownRef,
      mouseDownCallBack: () => {
         setOpen(false);
      },
   });

   function openOrClose() {
      setOpen(!open);
   }

   return { dropdownRef, open, setOpen, openOrClose };
}
