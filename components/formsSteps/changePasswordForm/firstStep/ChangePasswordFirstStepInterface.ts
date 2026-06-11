import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";
import useStepInterface from "@/models/interfaces/UI/useStepInterface";

export default interface ChangePasswordFirstStepInterface extends useStepInterface {
   userEmail: string;
   request: ChangeUserPasswordRequestDto;
   setNewPassword: (value: string) => void;
   setCurrentPassword: (value: string) => void;
}
