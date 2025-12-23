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

    document.addEventListener("mousedown", handleMouseClick);

    return () => {
      document.removeEventListener("mousedown", handleMouseClick);
    };
  }, [shouldHandleNow, ref]);
}
