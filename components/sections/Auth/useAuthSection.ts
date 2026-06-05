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

   function switchBackToLogin() {
      setFormType(login);
   }

   return {
      formType,
      isLogin: formType === login,
      isForgotPassword: formType === forgotPassword,
      switchBackToLogin,
      switchToForgotPassword,
      switchAuth,
   };
}
