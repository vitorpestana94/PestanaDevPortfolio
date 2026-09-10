import { useRef, useState } from "react";

export default function useHomePicture() {
  const [isTapped, setIsTapped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleTap(event: PointerEvent) {
    if (event.pointerType !== "touch") return;

    setIsTapped(true);

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = setTimeout(() => {
      setIsTapped(false);
    }, 6000);
  }

  return { ref, isTapped, handleTap };
}