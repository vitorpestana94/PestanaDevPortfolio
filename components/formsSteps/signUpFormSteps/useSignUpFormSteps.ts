import useHandleStep from "@/hooks/useStep";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import { useState } from "react";
import { signIn as signUp } from "next-auth/react";
import useRequesthErros from "@/hooks/useRequestErros";

export default function useSignUpFormSteps() {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [isRequestError, setIsRequestError] = useState(false);
   const [formData, setFormData] = useState<SignUpRequest>({
      email: "",
      name: "",
      password: "",
      deviceId: "",
   });

   const { step, nextStep, previousStep, setStep } = useHandleStep({
      maxSteps: 4,
   });

   function setErrorTrue() {
      setIsRequestError(true);
   }

   const { handleRequestError } = useRequesthErros({
      unexpected: setErrorTrue,
      badRequest: setErrorTrue,
      forbidden: setErrorTrue,
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

      setIsLoading(false);

      if (!response) {
         handleRequestError("500");
         return;
      }

      if (response.ok) {
         nextStep();
      } else {
         handleRequestError(response?.error ?? "500");
      }
   }

   return {
      isRequestError,
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
