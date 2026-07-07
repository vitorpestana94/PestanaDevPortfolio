import useStepInterface from "@/models/interfaces/UI/useStepInterface";
import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";

export default interface ChangePasswordFirstStepInterface
   extends useStepInterface, ReactHookFormPros {
   userEmail: string;
   newPassword: string;
   currentPassword: string;
}
