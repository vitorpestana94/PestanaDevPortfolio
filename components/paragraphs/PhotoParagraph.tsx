"use client";

import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";

export default function PhotoParagraph() {
  const { ref, isInView } = useEffetInView();

  return (
    <motion.p
      className="homeParagraph px-20 xl:px-24 2xl:px-40 3xl:px-64"
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2, delay: 2 }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor mi
      ut nulla rutrum, ut dictum libero tempor. Nunc vehicula faucibus
      elementum. Morbi facilisis sed leo condimentum ultrices. Etiam feugiat
      urna nec massa dignissim lacinia. Suspendisse finibus faucibus metus
    </motion.p>
  );
}
