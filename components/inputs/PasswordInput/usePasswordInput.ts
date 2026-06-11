import { useState, useEffect } from "react";
import usePasswordProps from "../Common/usePasswordProps";
import validatePassword from "@/utils/strings/validatePassword";
import { Dispatch, SetStateAction } from "react";
import { FormErrors } from "@/components/formsSteps/signUpFormSteps/steps/third/useSignUpThirdStep";

export default function usePasswordInput(
   setIsFormError: Dispatch<SetStateAction<FormErrors>>,
   isPasswordConfirmation: boolean,
   password?: string,
   isCurrentPasswordInput?: boolean,
) {
   const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);
   const [isPasswordConfirmationEmpty, setIsPasswordConfirmationEmpty] =
      useState<boolean>(false);
   const [isPasswordConfirmationMisMatch, setIsPasswordConfirmationMisMatch] =
      useState<boolean>(false);
   const [isPasswordFormatWrong, setIsPasswordFormatWrong] =
      useState<boolean>(false);
   const { t, eye, eyeOn, switchEye } = usePasswordProps();
   const schema = validatePassword();

   function verifyPassword(event: React.FocusEvent<HTMLInputElement, Element>) {
      const password: string = event.target.value;

      setIsPasswordEmpty(!password);

      if (!isCurrentPasswordInput) {
         const isValid: boolean = schema.validate(password) as boolean;

         setIsPasswordFormatWrong(!isValid);
      }
   }

   function verifyPasswordConfirmation(
      event: React.FocusEvent<HTMLInputElement, Element>,
   ) {
      const passwordConfirmation: string = event.target.value;

      setIsPasswordConfirmationEmpty(!passwordConfirmation);
      setIsPasswordConfirmationMisMatch(password !== passwordConfirmation);
   }

   function getPlaceholder() {
      return isPasswordConfirmation
         ? t("auth.signUp.form.thirdStep.placeholders.passwordConfirmation")
         : t("auth.signUp.form.thirdStep.placeholders.password");
   }

   function getErrorMessage() {
      let errorMessage = "";

      if (isPasswordEmpty) {
         errorMessage = t("auth.signUp.form.thirdStep.error.password.empty");
      } else if (isPasswordFormatWrong) {
         errorMessage = t(
            "auth.signUp.form.thirdStep.error.password.wrongFormat",
         );
      } else if (isPasswordConfirmationEmpty) {
         errorMessage = t(
            "auth.signUp.form.thirdStep.error.passwordConfirmation.empty",
         );
      } else if (isPasswordConfirmationMisMatch) {
         errorMessage = t(
            "auth.signUp.form.thirdStep.error.passwordConfirmation.mismatch",
         );
      }

      return errorMessage;
   }

   useEffect(() => {
      setIsFormError((previous) => ({
         ...previous,
         nameError: isPasswordFormatWrong || isPasswordEmpty,
      }));
   }, [isPasswordFormatWrong, isPasswordEmpty]);

   useEffect(() => {
      setIsFormError((previous) => ({
         ...previous,
         passwordConfirmationError:
            isPasswordConfirmationEmpty || isPasswordConfirmationMisMatch,
      }));
   }, [isPasswordConfirmationEmpty, isPasswordConfirmationMisMatch]);

   return {
      isPasswordError:
         isPasswordFormatWrong ||
         isPasswordEmpty ||
         isPasswordConfirmationEmpty ||
         isPasswordConfirmationMisMatch,
      eye,
      eyeOn,
      t,
      getPlaceholder,
      switchEye,
      verifyPassword,
      getErrorMessage,
      verifyPasswordConfirmation,
   };
}
