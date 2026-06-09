import useHandleStep from "@/hooks/useStep";
import { useState } from "react";

export default function useEditProfileFormSteps() {
   const [isEmailUpdate, setIsEmailUpdate] = useState<boolean>(false);
   const { step, nextStep } = useHandleStep({
      maxSteps: 3,
   });

   function setIsUpdateEmail(isUpdateEmail: boolean) {
      setIsEmailUpdate(isUpdateEmail);
   }

   return {
      step,
      isEmailUpdate,
      setIsUpdateEmail,
      nextStep,
   };
}
