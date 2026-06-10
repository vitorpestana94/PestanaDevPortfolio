import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";

export default interface EditProfileFirstStepInterface {
   request: ChangeUserDataRequestDto;
   nextStep: () => void;
   setEmail: (value: string) => void;
   setName: (value: string) => void;
   submit(): Promise<void>;
}
