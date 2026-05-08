import { Dispatch, SetStateAction } from "react";
import { FormErrors } from "@/components/formsSteps/signUpFormSteps/steps/third/useSignUpThirdStep";

export default interface NameInputInterface {
  placeholder: string;
  setName(value: string): void;
  setIsFormError: Dispatch<SetStateAction<FormErrors>>;
}
