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
   const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
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
      verifyPC(event.target.value);
   }

   function verifyPC(passwordConfirmation: string) {
      setPasswordConfirmation(passwordConfirmation);
      setIsPasswordConfirmationEmpty(!passwordConfirmation);
      setIsPasswordConfirmationMisMatch(password !== passwordConfirmation);
   }

   function getPlaceholder() {
      return isPasswordConfirmation
         ? t("auth.sign-up.form.thirdStep.placeholders.passwordConfirmation")
         : t("auth.sign-up.form.thirdStep.placeholders.password");
   }

   function getErrorMessage() {
      let errorMessage = "";

      if (!isPasswordConfirmation) {
         if (isPasswordEmpty) {
            errorMessage = t(
               "auth.sign-up.form.thirdStep.error.password.empty",
            );
         } else if (isPasswordFormatWrong) {
            errorMessage = t(
               "auth.sign-up.form.thirdStep.error.password.wrongFormat",
            );
         }
      } else {
         if (isPasswordConfirmationEmpty) {
            errorMessage = t(
               "auth.sign-up.form.thirdStep.error.passwordConfirmation.empty",
            );
         } else if (isPasswordConfirmationMisMatch) {
            errorMessage = t(
               "auth.sign-up.form.thirdStep.error.passwordConfirmation.mismatch",
            );
         }
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

   useEffect(() => {
      if (password && passwordConfirmation) {
         verifyPC(passwordConfirmation);
      }
   }, [password, passwordConfirmation]);

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
