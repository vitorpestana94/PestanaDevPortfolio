"use client";

import Banner from "../../divs/AuthDivBg/AuthDivBg";
import useAuthSection from "./useAuthSection";
import LoginForm from "@/components/forms/LoginForm";

export default function AuthSection() {
  const { isLogin, switchAuth } = useAuthSection();

  return (
    <section className="w-full flex flex-1 flex-col sm:flex-row">
      <Banner isLogin={isLogin} />
      {isLogin ? <LoginForm /> : <p>SignUp Form</p>}
    </section>
  );
}
