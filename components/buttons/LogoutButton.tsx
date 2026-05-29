import { signOut } from "next-auth/react";
import { motion } from "motion/react";
import Icon from "../icons/Icons";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";

export default function LogoutButton() {
   const { scale, transition } = useButtonMotionEffects();

   return (
      <motion.button
         className="cursor-pointer"
         type="button"
         onClick={() => signOut()}
         whileTap={scale}
         whileHover={scale}
         transition={transition}
      >
         <Icon
            iconName="logout"
            className="aspect-square w-6 strokeAzulPestana"
         />
      </motion.button>
   );
}
