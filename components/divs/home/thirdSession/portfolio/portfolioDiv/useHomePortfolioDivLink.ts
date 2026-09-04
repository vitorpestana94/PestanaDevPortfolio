import { useRef, useState } from "react";

export default function useHomePortfolioDivLink() {
   const initialStyle = "z-0 portfolioDivsBorders";

   const [style, setStyle] = useState(initialStyle);
   const [show, setShow] = useState(false);
   const [hasTapped, setHasTapped] = useState(false);

   const linkRef = useRef<HTMLAnchorElement>(null);
   const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

   function hoverStart() {
      setStyle(initialStyle);
      setShow(false);
   }

   function hoverEnd() {
      setStyle("z-20");
      setShow(true);
   }

   function handleTap(event: PointerEvent) {
      const isTouch = event.pointerType === "touch";

      if (!isTouch) {
         linkRef.current?.click();
         return;
      }

      if (!hasTapped) {
         setHasTapped(true);
         setStyle("z-20");
         setShow(true);

         if (resetTimerRef.current) {
            clearTimeout(resetTimerRef.current);
         }

         resetTimerRef.current = setTimeout(() => {
            setHasTapped(false);
            setStyle(initialStyle);
            setShow(false);
         }, 8000);

         return;
      }

      if (resetTimerRef.current) {
         clearTimeout(resetTimerRef.current);
      }

      linkRef.current?.click();
   }

   return {
      hoverStart,
      handleTap,
      hoverEnd,
      linkRef,
      show,
      style,
   };
}