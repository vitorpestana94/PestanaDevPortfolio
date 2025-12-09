"use client";

import useEffetInView from "@/hooks/useEffetInView";
import { motion } from "motion/react";
import FotoDoSeuZe from "./HomePicture";

export default function HomePhotoDiv() {
  const { ref, isInView } = useEffetInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: -20 } : {}}
      transition={{ duration: 1.5, delay: 3 }}
    >
      <FotoDoSeuZe />
    </motion.div>
  );
}
