"use client";

import useAuthButton from "./useAuthButton";
import AuthButtonInterface from "./AuthButtonInterface";
import { motion } from "motion/react";

export default function AuthButton({ submit }: AuthButtonInterface) {
  const { t, scale, handleLogin } = useAuthButton(submit);

  return (
    <motion.button
      onClick={(event) => {
        handleLogin(event);
      }}
      whileTap={scale}
      whileHover={scale}
      transition={{ type: "spring", stiffness: 200, damping: 6 }}
      className="loginInputsDivs w-[55%] shadow-2xs shadow-black text-shadow-2xs text-shadow-black border-black 
      text-[0.75rem] bg-[#38b6ff] text-white flex justify-center cursor-pointer"
      type="submit"
    >
      {t("auth.login.form.title")}
    </motion.button>
  );
}
