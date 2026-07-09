import useStepInterface from "@/models/interfaces/UI/useStepInterface";
import { useEffect } from "react";

export default function useEditProfileSecondtStep({
   isEmailUpdate,
   nextStep,
}: useStepInterface & { isEmailUpdate: boolean }) {
   useEffect(() => {
      if (!isEmailUpdate) {
         nextStep!();
      }
   }, []);
}
