import useHandleStep from "@/hooks/useStep";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import { useState } from "react";
import { signIn as signUp } from "next-auth/react";

export default function useSignUpFormSteps() {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [formData, setFormData] = useState<SignUpRequest>({
      email: "",
      name: "",
      password: "",
      deviceId: "",
   });

   const { step, nextStep, previousStep, setStep } = useHandleStep({
      maxSteps: 4,
   });

   function setEmail(emailProvided: string) {
      setFormData((previous) => ({ ...previous, email: emailProvided }));
   }

   function setPassword(passwordProvided: string) {
      setFormData((previous) => ({ ...previous, password: passwordProvided }));
   }

   function setName(nameProvided: string) {
      setFormData((previous) => ({ ...previous, name: nameProvided }));
   }

   async function submitForm() {
      setIsLoading(true);

      const response = await signUp("credentials-signup", {
         request: JSON.stringify(formData),
         redirect: false,
      });

      if (response) {
         setIsLoading(false);
      }

      if (response!.ok) {
         nextStep();
      }
   }

   return {
      isLoading,
      formData,
      step,
      nextStep,
      previousStep,
      setStep,
      setEmail,
      setPassword,
      setName,
      submitForm,
   };
}
