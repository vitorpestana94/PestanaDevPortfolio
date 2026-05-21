import useHandleStep from "@/hooks/useStep";
import { useState } from "react";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";

export default function useForgotPasswordFormSteps() {
   const { step, nextStep, previousStep, setStep } = useHandleStep({
      maxSteps: 4,
   });

   const [formData, setFormData] = useState<ForgotPasswordRequest>({
      email: "",
      password: "",
   });

   function setEmail(emailProvided: string) {
      setFormData((previous) => ({ ...previous, email: emailProvided }));
   }

   function setPassword(password: string) {
      setFormData((previous) => ({ ...previous, password: password }));
   }

   return { step, formData, nextStep, setEmail, setPassword };
}
