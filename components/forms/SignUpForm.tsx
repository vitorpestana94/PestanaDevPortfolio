"use client";

import AuthForm from "./AuthForm";
import FormSteps from "../formsSteps/signUpFormSteps/SignUpFormSteps";

export default function SignUpForm() {
  return (
    <AuthForm>
      <FormSteps />
    </AuthForm>
  );
}
