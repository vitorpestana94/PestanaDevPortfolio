import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";

export default interface PasswordInputInterface extends ReactHookFormPros {
   password?: string;
   isPasswordConfirmation?: boolean;
   isCurrentPasswordInput?: boolean;
   errorMessage?: string;
   placeholder?: string;
   style?: {
      mainDiv: {
         className: string;
      };
   };
}
