import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";

export const newPassword = "newPassword";
export const password = "password";
export const passwordConfirmation = "passwordConfirmation";
export const currentPassword = "currentPassword";

export type PasswordInputType =
   | typeof newPassword
   | typeof password
   | typeof passwordConfirmation
   | typeof currentPassword;

export default interface PasswordInputInterface extends ReactHookFormPros {
   password?: string;
   type: PasswordInputType;
   isCurrentPasswordInput?: boolean;
   errorMessage?: string;
   placeholder?: string;
   style?: {
      mainDiv: {
         className: string;
      };
   };
}
