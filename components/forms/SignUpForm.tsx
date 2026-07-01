"use client";

import AuthDiv from "./DevidedDivFormWrapper";
import FormSteps from "../formsSteps/signUpFormSteps/SignUpFormSteps";
import LoginSignUpSwitch from "@/components/buttons/switchAutoButton/SwitchAutoButton";

export default function SignUpForm() {
   return (
      <AuthDiv className="xxs:min-h-81 xs:min-h-0">
         <FormSteps />
         <LoginSignUpSwitch />
      </AuthDiv>
   );
}
