"use client";

import Interface from "./BackToLoginButtonInterface";
import Icon from "@/components/icons/Icons";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import { motion } from "motion/react";

export default function BackToLoginButton({ switchBackToLogin }: Interface) {
   const { scale, transition } = useButtonMotionEffects();

   return (
      <motion.button
         whileTap={scale}
         whileHover={scale}
         transition={transition}
         type="button"
         className="absolute left-4 top-3 hover:cursor-pointer"
         onClick={() => switchBackToLogin()}
      >
         <Icon
            iconName="leftArrow"
            className="fillAzulPestana aspect-square w-8"
         />
      </motion.button>
   );
}
