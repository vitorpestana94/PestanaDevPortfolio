import useStepInterface from "@/models/interfaces/UI/useStepInterface";

export default interface SignUpFirstStepInterface extends useStepInterface {
  email?: string;
  setEmail: (email: string) => void;
}
