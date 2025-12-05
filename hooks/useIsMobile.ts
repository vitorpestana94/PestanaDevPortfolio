"use client";

import { useState, useEffect } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function checkIfIsMobile() {
    setIsMobile(window.innerWidth <= 639);
  }

  useEffect(() => {
    checkIfIsMobile();

    window.addEventListener("resize", checkIfIsMobile);

    return () => window.removeEventListener("resize", checkIfIsMobile);
  }, []);

  return { isMobile };
}
