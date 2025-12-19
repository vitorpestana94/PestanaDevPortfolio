"use client";

import { motion } from "motion/react";
import FrameDivInterface from "./FrameDivInterface";
import useEffetInView from "@/hooks/useEffetInView";

export default function FrameDiv({ children, props }: FrameDivInterface) {
  const { ref, isInView } = useEffetInView();
  const animate = props.waitIsInView
    ? isInView
      ? { opacity: 1 }
      : {}
    : { opacity: 1 };

  return (
    <motion.div
      ref={ref}
      className={`relative aspect-2/1 ${props.className} flex justify-center items-center`}
      initial={{ opacity: 0 }}
      animate={animate}
      transition={{ duration: 1.5, delay: 1.5 }}
    >
      <span className="absolute top-0 left-0 w-4 aspect-square border-t-2 border-l-2 border-white"></span>
      {children}
      <span className="absolute bottom-0 right-0 w-4 aspect-square border-b-2 border-r-2 border-white"></span>
    </motion.div>
  );
}
