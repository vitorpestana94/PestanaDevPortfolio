import Image from "next/image";
import { motion } from "motion/react";

export default function SeuZeLeiteiro() {
   const effect = { filter: "brightness(0.8) contrast(1.1)" };

   return (
      <motion.div
         className="mx-auto aspect-4/3 w-[75%] sm:w-[70%] 3xl:w-[65%] relative z-0"
         whileTap={effect}
         whileHover={effect}
      >
         <Image
            className="rounded-lg z-0"
            src={"/png/seuZeLeiteiro.png"}
            alt="seuZeLeiteiroPicture"
            fill
            style={{ objectFit: "fill" }}
            loading="lazy"
         />
      </motion.div>
   );
}
