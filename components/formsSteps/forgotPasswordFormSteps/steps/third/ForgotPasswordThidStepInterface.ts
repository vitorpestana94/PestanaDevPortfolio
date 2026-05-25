import useStepInterface from "@/models/interfaces/UI/useStepInterface";

export default interface ForgotPasswordThidStepInterface extends useStepInterface {
   isLoading: boolean;
   password: string;
   submitForm: () => Promise<void>;
   setPassword: (password: string) => void;
}
