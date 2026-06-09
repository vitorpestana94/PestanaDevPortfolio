"use client";

import useAuthButton from "./useAuthButton";
import AuthButtonInterface from "./AuthButtonInterface";
import { motion } from "motion/react";
import Spinner from "@/components/loaders/Spinner";

export default function AuthButton({
   buttonLabel,
   isFormWithErrors,
   isLoading,
   styles,
   submit,
}: AuthButtonInterface) {
   const { scale, transition, handleClick } = useAuthButton(submit);

   return (
      <motion.button
         onClick={(event) => {
            handleClick(event);
         }}
         whileTap={scale}
         whileHover={scale}
         disabled={isFormWithErrors}
         transition={transition}
         className={`loginInputsDivs py-2! min-h-9 relative w-4/12 shadow-2xs shadow-black text-shadow-2xs text-shadow-black border-black 
         text-[0.75rem] bg-[#38b6ff] text-white flex justify-center self-center
         ${isFormWithErrors ? "buttonDisabled" : "cursor-pointer"} ${styles}`}
         type="submit"
      >
         {isLoading ? (
            <Spinner loading={isLoading} style="max-h-7" />
         ) : (
            buttonLabel
         )}
      </motion.button>
   );
}
