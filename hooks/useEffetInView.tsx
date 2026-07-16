"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import { RefObject } from "react";

export default function useEffetInView(refX?: RefObject<HTMLElement>) {
   const ref = useRef(null);
   const isInView = useInView(refX ? refX : ref, { once: true });

   return { ref, isInView };
}
