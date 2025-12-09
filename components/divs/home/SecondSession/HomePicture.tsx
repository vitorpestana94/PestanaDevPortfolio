"use client";

import SeuZeLeiteiroFoto from "@/components/images/SeuZeLeiteiro";
import { motion } from "motion/react";

export default function HomePicture() {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      <SeuZeLeiteiroFoto />
    </motion.div>
  );
}
