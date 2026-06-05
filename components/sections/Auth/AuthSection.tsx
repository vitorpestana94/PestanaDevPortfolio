"use client";

import Banner from "../../divs/AuthDivBg/AuthDivBg";
import useAuthSection from "./useAuthSection";
import LoginForm from "@/components/forms/loginForm/LoginForm";
import LoginSignUpSwitch from "@/components/buttons/switchAutoButton/SwitchAutoButton";
import SignUpForm from "@/components/forms/SignUpForm";
import ForgotPasswordForm from "@/components/forms/forgotPasswordForm/ForgotPasswordForm";
import DevidedSection from "../DevidedSection";

export default function AuthSection() {
   const {
      isLogin,
      formType,
      isForgotPassword,
      switchAuth,
      switchBackToLogin,
      switchToForgotPassword,
   } = useAuthSection();

   function getForm() {
      const form = {
         login: <LoginForm switchToForgotPassword={switchToForgotPassword} />,
         signUp: <SignUpForm />,
         forgotPassword: (
            <ForgotPasswordForm switchBackToLogin={switchBackToLogin} />
         ),
      };

      return form[formType];
   }

   const loginOrSignUpSwitch = !isForgotPassword && (
      <LoginSignUpSwitch isLogin={isLogin} switchAuth={switchAuth} />
   );

   return (
      <DevidedSection>
         <Banner formType={formType} />
         {loginOrSignUpSwitch}
         {getForm()}
      </DevidedSection>
   );
}
