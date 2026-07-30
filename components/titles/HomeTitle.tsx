"use client";

import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";

export default function HomeTitle({ children, className }: { children: React.ReactNode, className?: string }) {
   const { ref, isInView } = useEffetInView();

   return (
      <motion.div
         className={`flex flex-col gap-y-3 ${className}`}
         ref={ref}
         initial={{ opacity: 0, x: -20 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ duration: 0.9, delay: 1 }}
      >
         {children}
      </motion.div>
   );
}
