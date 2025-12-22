"use client";

import HomePortfolioDivsGroupsInteface from "./HomePortfolioDivsGroupsInteface";
import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";

export default function HomePortfolioDivsGroups({
  children,
  className,
  initial,
  delay,
}: HomePortfolioDivsGroupsInteface) {
  const { ref, isInView } = useEffetInView();

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay: delay }}
      className={`flex flex-col w-full  ${className}`}
    >
      {children}
    </motion.div>
  );
}
