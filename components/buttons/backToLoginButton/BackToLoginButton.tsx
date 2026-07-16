"use client";

import Icon from "@/components/icons/Icons";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import { motion } from "motion/react";
import Link from "next/link";

export default function BackToLoginButton() {
   const { scale, transition } = useButtonMotionEffects();

   return (
      <motion.button
         whileTap={scale}
         whileHover={scale}
         transition={transition}
         type="button"
         className="absolute left-4 top-4 cursor-pointer"
      >
         <Link href={"login"}>
            <Icon
               iconName="leftArrow"
               className="fillAzulPestana aspect-square w-8"
            />
         </Link>
      </motion.button>
   );
}
