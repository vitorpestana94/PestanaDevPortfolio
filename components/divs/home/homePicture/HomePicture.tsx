"use client";

import SeuZeLeiteiroFoto from "@/components/images/SeuZeLeiteiro";
import { motion } from "motion/react";
import useHomePicture from "./useHomePicture";

export default function HomePicture() {
  const { ref, isTapped, handleTap } = useHomePicture();

  return (
    <motion.div
      ref={ref}
      animate={{ scale: isTapped ? 1.15 : 1 }}
      className="w-full"
      whileHover={{ scale: 1.15 }}
      onTap={handleTap}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      <SeuZeLeiteiroFoto />
    </motion.div>
  );
}