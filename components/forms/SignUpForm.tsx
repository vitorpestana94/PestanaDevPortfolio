"use client";

import AuthForm from "./DevidedDivFormWrapper";
import FormSteps from "../formsSteps/signUpFormSteps/SignUpFormSteps";
import LoginSignUpSwitch from "@/components/buttons/switchAutoButton/SwitchAutoButton";

export default function SignUpForm() {
   return (
      <AuthForm className="xxs:min-h-81 xs:min-h-0">
         <FormSteps />
         <LoginSignUpSwitch />
      </AuthForm>
   );
}
