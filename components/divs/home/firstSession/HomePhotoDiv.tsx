"use client";

import SeuZeLeiteiroFoto from "@/components/images/SeuZeLeiteiro";
import QuadradoAzul from "./HomeBlueDiv";
import useEffetInView from "@/hooks/useEffetInView";
import { motion } from "motion/react";

export default function HomePhotoDiv() {
  const { ref, isInView } = useEffetInView();

  return (
    <motion.div
      className="flex items-center justify-center"
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: -20 } : {}}
      transition={{ duration: 1.5, delay: 3 }}
    >
      <SeuZeLeiteiroFoto />
      <QuadradoAzul />
    </motion.div>
  );
}
