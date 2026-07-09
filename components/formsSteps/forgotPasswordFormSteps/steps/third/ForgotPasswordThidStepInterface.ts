import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";

export default interface ForgotPasswordThidStepInterface extends ReactHookFormPros {
   isLoading: boolean;
   password: string;
   submitForm: (data: ForgotPasswordRequest) => Promise<void>;
}
