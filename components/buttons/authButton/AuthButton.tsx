"use client";

import useAuthButton from "./useAuthButton";
import AuthButtonInterface from "./AuthButtonInterface";
import { motion } from "motion/react";

export default function AuthButton({
  buttonLabel,
  submit,
  isFormWithErrors,
}: AuthButtonInterface) {
  const { t, scale, transition, handleClick } = useAuthButton(submit);

  return (
    <motion.button
      onClick={(event) => {
        handleClick(event);
      }}
      whileTap={scale}
      whileHover={scale}
      disabled={isFormWithErrors}
      transition={transition}
      className={`loginInputsDivs w-[55%] shadow-2xs shadow-black text-shadow-2xs text-shadow-black border-black 
      text-[0.75rem] bg-[#38b6ff] text-white flex justify-center self-center
      ${isFormWithErrors ? "buttonDisabled" : "cursor-pointer"}`}
      type="submit"
    >
      {buttonLabel}
    </motion.button>
  );
}
