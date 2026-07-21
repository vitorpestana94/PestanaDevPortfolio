import useStepInterface from "@/models/interfaces/UI/useStepInterface";
import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";

export default interface SignUpThirdStepInterface
   extends useStepInterface, ReactHookFormPros {
   isLoading: boolean;
   password?: string;
   accepted: boolean;
   submitForm: (data: SignUpRequest) => Promise<void>;
}
