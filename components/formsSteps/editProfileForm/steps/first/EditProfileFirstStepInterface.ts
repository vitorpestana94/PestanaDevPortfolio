import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";

export default interface EditProfileFirstStepInterface extends ReactHookFormPros {
   email: string | undefined;
   name: string | undefined;
   isEmailUpdate: boolean;
   nextStep: () => void;
   submit(data: ChangeUserDataRequestDto): Promise<void>;
}
