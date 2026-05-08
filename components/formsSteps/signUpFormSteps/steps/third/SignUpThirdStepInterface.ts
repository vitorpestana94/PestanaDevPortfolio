import useStepInterface from "@/models/interfaces/UI/useStepInterface";

export default interface SignUpThirdStepInterface extends useStepInterface {
  isLoading: boolean;
  password?: string;
  setPassword(value: string): void;
  setName(value: string): void;
  submitForm: () => Promise<void>;
}
