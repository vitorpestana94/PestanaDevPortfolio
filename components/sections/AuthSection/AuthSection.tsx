"use client";

import Banner from "../../divs/AuthDivBg/AuthDivBg";
import useAuthSection from "./useAuthSection";
import LoginForm from "@/components/forms/loginForm/LoginForm";
import LoginSignUpSwitch from "@/components/buttons/switchAutoButton/SwitchAutoButton";
import SignUpForm from "@/components/forms/SignUpForm";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

export default function AuthSection() {
   const {
      isLogin,
      formType,
      isForgotPassword,
      switchAuth,
      switchToForgotPassword,
   } = useAuthSection();

   function getForm() {
      const form = {
         login: <LoginForm switchToForgotPassword={switchToForgotPassword} />,
         signUp: <SignUpForm />,
         forgotPassword: <ForgotPasswordForm />,
      };

      return form[formType];
   }

   const loginOrSignUpSwitch = !isForgotPassword && (
      <LoginSignUpSwitch isLogin={isLogin} switchAuth={switchAuth} />
   );

   return (
      <section className="w-full flex flex-1 flex-col lg:flex-row relative">
         <Banner formType={formType} />
         {loginOrSignUpSwitch}
         {getForm()}
      </section>
   );
}
