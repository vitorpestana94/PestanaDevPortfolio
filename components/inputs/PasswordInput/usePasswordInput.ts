import usePasswordProps from "../Common/usePasswordProps";
import validatePassword from "@/utils/strings/validatePassword";

export default function usePasswordInput(
   isPasswordConfirmation: boolean,
   password?: string,
) {
   const { t, eye, eyeOn, switchEye } = usePasswordProps();
   const schema = validatePassword();
   const placeHolders = {
      passwordConfirmation: t(
         "auth.sign-up.form.thirdStep.placeholders.passwordConfirmation",
      ),
      password: t("auth.sign-up.form.thirdStep.placeholders.password"),
   };

   const errors = {
      required: {
         passwordConfirmation: t(
            "auth.sign-up.form.thirdStep.error.passwordConfirmation.empty",
         ),
         password: t("auth.sign-up.form.thirdStep.error.password.empty"),
      },
      validate: {
         wrongFormat: t(
            "auth.sign-up.form.thirdStep.error.password.wrongFormat",
         ),
         mismatch: t(
            "auth.sign-up.form.thirdStep.error.passwordConfirmation.mismatch",
         ),
      },
   };

   function getPlaceholder() {
      return isPasswordConfirmation
         ? placeHolders.passwordConfirmation
         : placeHolders.password;
   }

   const passwordFieldName = isPasswordConfirmation
      ? "passwordConfirmation"
      : "password";

   const checkPassword = (value: any) =>
      isPasswordConfirmation
         ? value === password || errors.validate.mismatch
         : schema.validate(value) || errors.validate.wrongFormat;

   return {
      t,
      eye,
      eyeOn,
      passwordFieldName,
      requiredError: isPasswordConfirmation
         ? errors.required.passwordConfirmation
         : errors.required.password,
      checkPassword,
      getPlaceholder,
      switchEye,
   };
}
