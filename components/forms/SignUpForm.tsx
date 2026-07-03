"use client";

import AuthDiv from "./DevidedDivFormWrapper";
import FormSteps from "../formsSteps/signUpFormSteps/SignUpFormSteps";

export default function SignUpForm() {
   return (
      <AuthDiv className="xxs:min-h-81 xs:min-h-0">
         <FormSteps />
      </AuthDiv>
   );
}
