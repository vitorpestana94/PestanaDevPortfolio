import { SetStateAction, Dispatch } from "react";
import { FormErrors } from "@/components/formsSteps/signUpFormSteps/steps/third/useSignUpThirdStep";

export default interface PasswordInputInterface {
   password?: string;
   isPasswordConfirmation?: boolean;
   isCurrentPasswordInput?: boolean;
   errorMessage?: string;
   placeholder?: string;
   setPassword(value: string): void;
   setIsFormError: Dispatch<SetStateAction<FormErrors>>;
   style?: {
      mainDiv: {
         className: string;
      };
   };
}
