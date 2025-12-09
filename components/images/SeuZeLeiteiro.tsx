import Image from "next/image";
import { motion } from "motion/react";

export default function SeuZeLeiteiro() {
  return (
    <motion.div
      className="mx-auto aspect-12/5 w-[70%] sm:w-[75%] xl:w-[80%] relative self-center xl:mt-40"
      whileHover={{ filter: "brightness(1.1) contrast(1.2)" }}
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
