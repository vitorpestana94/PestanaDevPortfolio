import useHandleMouseDownInterface from "./interfaces/useHandleMouseDown";
import { useEffect } from "react";

export default function useHandleMouseDown({
   shouldHandleNow,
   ref,
   mouseDownCallBack,
}: useHandleMouseDownInterface) {
   useEffect(() => {
      const handleMouseClick = (event: MouseEvent) => {
         if (shouldHandleNow) {
            if (ref.current && !ref.current?.contains(event.target as Node)) {
               mouseDownCallBack();
            }
         }
      };

      const handleEscape = (event: KeyboardEvent) => {
         if (shouldHandleNow) {
            if (event.key === "Escape") {
               mouseDownCallBack();
            }
         }
      };

      document.addEventListener("mousedown", handleMouseClick);
      document.addEventListener("keydown", handleEscape);

      return () => {
         document.removeEventListener("mousedown", handleMouseClick);
         document.removeEventListener("keydown", handleEscape);
      };
   }, [shouldHandleNow, ref]);
}
