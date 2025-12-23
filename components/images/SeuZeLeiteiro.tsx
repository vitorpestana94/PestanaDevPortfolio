import Image from "next/image";
import { motion } from "motion/react";

export default function SeuZeLeiteiro() {
  const effect = { filter: "brightness(0.8) contrast(1.1)" };

  return (
    <motion.div
      className="mx-auto aspect-4/3 w-[70%] sm:w-[75%] xl:w-[75%] relative self-center xl:mt-5"
      whileTap={effect}
      whileHover={effect}
    >
      <Image
        className="rounded-lg"
        src={"/png/seuZeLeiteiro.png"}
        alt="seuZeLeiteiroPicture"
        fill
        style={{ objectFit: "fill" }}
        loading="lazy"
      />
    </motion.div>
  );
}
