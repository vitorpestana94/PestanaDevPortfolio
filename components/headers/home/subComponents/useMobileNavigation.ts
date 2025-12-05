"use client";

import { useState, useRef } from "react";
import useHandleMouseDown from "@/hooks/useHandleKeyDown";

export default function useMobileNavigation() {
  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useHandleMouseDown({
    shouldHandleNow: open,
    ref: navRef,
    mouseDownCallBack: () => {
      setOpen(!open);
    },
  });

  return { navRef, open, setOpen };
}
