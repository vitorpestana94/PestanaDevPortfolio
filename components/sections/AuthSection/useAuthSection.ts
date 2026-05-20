"use client";

import { useState } from "react";

const login = "login";
const signUp = "signUp";
const forgotPassword = "forgotPassword";

export type FormType = typeof login | typeof signUp | typeof forgotPassword;

export default function useAuthSection() {
   const [formType, setFormType] = useState<FormType>(login);

   function switchAuth() {
      setFormType(formType === login ? signUp : login);
   }

   function switchToForgotPassword() {
      setFormType(forgotPassword);
   }

   return {
      formType,
      isLogin: formType === login,
      isForgotPassword: formType === forgotPassword,
      switchToForgotPassword,
      switchAuth,
   };
}
