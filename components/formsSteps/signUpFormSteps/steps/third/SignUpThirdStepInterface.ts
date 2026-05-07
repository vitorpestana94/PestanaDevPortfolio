import useStepInterface from "@/models/interfaces/UI/useStepInterface";

export default interface SignUpThirdStepInterface extends useStepInterface {
  setPassword(value: string): void;
  setName(value: string): void;
}
