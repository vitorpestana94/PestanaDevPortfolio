import { Dispatch, SetStateAction } from "react";

export default interface useStepInterface {
  step?: number;
  nextStep?: () => void;
  previousStep?: () => void;
  setStep?: (step: Dispatch<SetStateAction<number>>) => void;
}
