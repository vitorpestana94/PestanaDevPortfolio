"use client";

import Banner from "../../divs/AuthDivBg/AuthDivBg";
import useAuthSection from "./useAuthSection";
import LoginForm from "@/components/forms/LoginForm";
import LoginSignUpSwitch from "@/components/buttons/switchAutoButton/SwitchAutoButton";
import SignUpForm from "@/components/forms/SignUpForm";

export default function AuthSection() {
  const { isLogin, switchAuth } = useAuthSection();

  return (
    <section className="w-full flex flex-1 flex-col sm:flex-row relative">
      <Banner isLogin={isLogin} />
      <LoginSignUpSwitch isLogin={isLogin} switchAuth={switchAuth} />
      {isLogin ? <LoginForm /> : <SignUpForm />}
    </section>
  );
}
