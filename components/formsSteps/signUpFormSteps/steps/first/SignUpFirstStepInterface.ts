import useStepInterface from "@/models/interfaces/UI/useStepInterface";
import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";

export default interface SignUpFirstStepInterface
   extends useStepInterface, ReactHookFormPros {
   email?: string;
}
