"use client";

import useAuthButton from "./useFormButton";
import AuthButtonInterface from "./FormButtonInterface";
import { motion } from "motion/react";
import Spinner from "@/components/loaders/Spinner";

export default function FormButton({
   buttonLabel,
   isFormWithErrors,
   isLoading,
   styles,
   submit,
}: AuthButtonInterface) {
   const { scale, transition } = useAuthButton();

   return (
      <motion.button
         onClick={() => {
            if (submit) {
               submit();
            }
         }}
         whileTap={scale}
         whileHover={scale}
         disabled={isFormWithErrors}
         transition={transition}
         className={`loginInputsDivs lg:py-2! xxs:min-h-6 xs:min-h-9 relative w-4/12 shadow-2xs shadow-black text-shadow-2xs text-shadow-black border-black 
         xxs:text-[0.5rem] xs:text-[0.625rem] sm:text-xs bg-[#38b6ff] text-white flex justify-center items-center self-center max-w-50
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
