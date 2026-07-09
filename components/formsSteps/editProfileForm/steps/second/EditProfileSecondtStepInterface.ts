import useStepInterface from "@/models/interfaces/UI/useStepInterface";

export default interface EditProfileSecondtStepInterface extends useStepInterface {
   isEmailUpdate: boolean;
   userEmail?: string;
}
