"use client";

import useEffetInView from "@/hooks/useEffetInView";
import { motion } from "motion/react";

export default function HomePhotoDiv({ children, className, delay } : { children: React.ReactNode, className?:string, delay?:number }) {
  const { ref, isInView } = useEffetInView();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: -20 } : {}}
      transition={{ duration: 1.5, delay: delay ?? 3 }}
    >
      {
        children
      }
    </motion.div>
  );
}
