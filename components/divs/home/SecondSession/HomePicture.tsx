"use client";

import SeuZeLeiteiroFoto from "@/components/images/SeuZeLeiteiro";
import { motion } from "motion/react";

export default function HomePicture() {
  const effect = { scale: 1.15 };

  return (
    <motion.div
      whileHover={effect}
      whileTap={effect}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      <SeuZeLeiteiroFoto />
    </motion.div>
  );
}
