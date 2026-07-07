import usePasswordProps from "../Common/usePasswordProps";
import validatePassword from "@/utils/strings/validatePassword";
import {
   PasswordInputType,
   passwordConfirmation,
} from "./PasswordInputInterface";
import { FieldErrors } from "react-hook-form";

export default function usePasswordInput(
   errorObject: FieldErrors<any> | undefined,
   type: PasswordInputType,
   password?: string,
) {
   const { t, eye, eyeOn, switchEye } = usePasswordProps();
   const schema = validatePassword();
   const isPasswordConfirmation = type === passwordConfirmation;

   const placeHolderPerTye: { [key: string]: string } = {
      passwordConfirmation: t(
         "auth.sign-up.form.thirdStep.placeholders.passwordConfirmation",
      ),
      password: t("auth.sign-up.form.thirdStep.placeholders.password"),
      newPassword: t("auth.forgot-password.placeHolders.newPassword"),
      currentPassword: t("user.changePassword.placeholders.current"),
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

   const errorsObjectPerType: { [key: string]: string } = {
      passwordConfirmation: errors.required.passwordConfirmation,
      password: errors.required.password,
      newPassword: errors.required.password,
   };

   const errosMessagePerType: { [key: string]: string } = {
      passwordConfirmation: errorObject?.passwordConfirmation
         ?.message as string,
      password: errorObject?.password?.message as string,
      newPassword: errorObject?.newPassword?.message as string,
   };

   const checkPassword = (value: any) =>
      isPasswordConfirmation
         ? value === password || errors.validate.mismatch
         : schema.validate(value) || errors.validate.wrongFormat;

   return {
      t,
      eye,
      eyeOn,
      passwordFieldName: type,
      requiredError: errorsObjectPerType[type],
      passwordError: errosMessagePerType[type],
      defaultPlaceholder: placeHolderPerTye[type],
      checkPassword,
      switchEye,
   };
}
