"use client";

import AuthDiv from "./AuthForm";
import Login from "../titles/LoginTitle";
import Email from "../inputs/LoginEmailFormInput";
import Password from "../inputs/LoginPasswordFormInput/LoginPasswordFormInput";

export default function LoginForm() {
  return (
    <AuthDiv>
      <Login />
      <div className="flex flex-col items-center w-[60%]">
        <Email />
        <Password />
      </div>
    </AuthDiv>
  );
}
