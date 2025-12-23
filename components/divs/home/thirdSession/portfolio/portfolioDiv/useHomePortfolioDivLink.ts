import { useState } from "react";
import { useRef } from "react";

export default function useHomePortfolioDivLink() {
  const initialStyle: string = "z-0 border-8 border-black";
  const [style, setStyle] = useState<string>(initialStyle);
  const [show, setShow] = useState<boolean>(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  function hoverStart() {
    setStyle(initialStyle);
    setShow(false);
  }

  function hoverEnd() {
    setStyle("z-20");
    setShow(true);
  }

  function handleTap() {
    setTimeout(() => {
      if (linkRef.current) {
        linkRef.current.click();
      }
    }, 800);
  }

  return { hoverStart, handleTap, hoverEnd, linkRef, show, style };
}
