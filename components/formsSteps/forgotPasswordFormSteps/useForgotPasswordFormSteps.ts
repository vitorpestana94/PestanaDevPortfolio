import useHandleStep from "@/hooks/useStep";
import { useState } from "react";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import { useForgotPassword } from "@/hooks/api/forgotPassword/mutation";

export default function useForgotPasswordFormSteps() {
   const { mutateAsync, isError, isPending, isSuccess } = useForgotPassword();
   const { step, nextStep, previousStep, setStep } = useHandleStep({
      maxSteps: 4,
   });

   const [formData, setFormData] = useState<ForgotPasswordRequest>({
      email: "",
      newPassword: "",
   });

   function setEmail(emailProvided: string) {
      setFormData((previous) => ({ ...previous, email: emailProvided }));
   }

   function setPassword(password: string) {
      setFormData((previous) => ({ ...previous, password: password }));
   }

   async function submitForm() {
      if (!formData.email || !formData.newPassword) return;

      await mutateAsync(formData);
   }

   return { step, formData, nextStep, setEmail, setPassword, submitForm };
}
