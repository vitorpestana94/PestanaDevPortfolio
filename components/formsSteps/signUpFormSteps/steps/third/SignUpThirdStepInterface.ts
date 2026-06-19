import useStepInterface from "@/models/interfaces/UI/useStepInterface";

export default interface SignUpThirdStepInterface extends useStepInterface {
   isRequestErro: boolean;
   isLoading: boolean;
   password?: string;
   setPassword(value: string): void;
   setName(value: string): void;
   submitForm: () => Promise<void>;
}
