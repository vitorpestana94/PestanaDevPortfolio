"use client";

import UmPoucoSobreMim from "@/components/titles/AbouTitle";
import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";

export default function AboutTextBlock() {
  const { ref, isInView } = useEffetInView();

  return (
    <motion.div
      className="flex flex-col gap-y-2 sm:gap-y-5 xl:gap-y-10"
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay: 1 }}
    >
      <UmPoucoSobreMim />
    </motion.div>
  );
}
