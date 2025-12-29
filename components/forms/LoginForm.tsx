"use client";

import AuthForm from "./AuthForm";
import Login from "../titles/LoginTitle";
import EmailPasswordButton from "../divs/LoginInputsDiv/LoginInputsDiv";

export default function LoginForm() {
  return (
    <AuthForm>
      <Login />
      <EmailPasswordButton />
    </AuthForm>
  );
}
