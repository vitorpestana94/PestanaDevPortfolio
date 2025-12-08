"use client";

import { useInView, motion } from "motion/react";
import { useRef } from "react";

export default function useEffetInView() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return { ref, isInView };
}
