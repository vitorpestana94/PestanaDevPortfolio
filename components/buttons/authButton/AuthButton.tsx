"use client";

import useAuthButton from "./useAuthButton";
import AuthButtonInterface from "./AuthButtonInterface";
import { motion } from "motion/react";

export default function AuthButton({
  submit,
  isLoginFormWithErrors,
}: AuthButtonInterface) {
  const { t, scale, transition, handleLogin } = useAuthButton(submit);

  return (
    <motion.button
      onClick={(event) => {
        handleLogin(event);
      }}
      whileTap={scale}
      whileHover={scale}
      disabled={isLoginFormWithErrors}
      transition={transition}
      className={`loginInputsDivs w-[55%] shadow-2xs shadow-black text-shadow-2xs text-shadow-black border-black 
      text-[0.75rem] bg-[#38b6ff] text-white flex justify-center
      ${
        isLoginFormWithErrors
          ? "cursor-not-allowed disabled:grayscale-100 disabled:opacity-80"
          : "cursor-pointer"
      }`}
      type="submit"
    >
      {t("auth.login.form.title")}
    </motion.button>
  );
}
