"use client";

import AuthForm from "./AuthForm";
import SignUpTitle from "../titles/SignUpTitle";
import FormSteps from "../formsSteps/signUpFormSteps/SignUpFormSteps";

export default function SignUpForm() {
  return (
    <AuthForm>
      <SignUpTitle />
      <FormSteps />
    </AuthForm>
  );
}
