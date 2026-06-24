import useHandleStep from "@/hooks/useStep";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import { useState } from "react";
import { signIn as signUp } from "next-auth/react";
import useRequesthErros from "@/hooks/useRequestErros";
import { toastError } from "@/utils/errors/toastHandlers";
import { useTranslations } from "next-intl";
import {
   getErrorStatusCode,
   getErrorMessage,
} from "@/utils/errors/errorMessagesHandlers";

export default function useSignUpFormSteps() {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [isRequestError, setIsRequestError] = useState(false);
   const [formData, setFormData] = useState<SignUpRequest>({
      email: "",
      name: "",
      password: "",
   });

   const { step, nextStep, previousStep, setStep } = useHandleStep({
      maxSteps: 4,
   });

   const t = useTranslations();

   const { handleRequestError } = useRequesthErros({
      unexpected: () => {
         toastError(t("error.unexpected"));
      },
      badRequest: (error) => {
         if (typeof error === "string") {
            if (error.includes("0cee")) {
               toastError(
                  t("auth.signUp.form.thirdStep.error.emailNotConfirmed"),
               );
            } else if (error.includes("a0b5")) {
               toastError(
                  t("auth.signUp.form.thirdStep.error.emailFormatInvalid"),
               );
            } else {
               toastError(t("error.unexpected"));
            }
         }
      },
      forbidden: () => {
         toastError(t("auth.signUp.form.thirdStep.error.emailNotConfirmed"));
      },
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
         handleRequestError(
            getErrorStatusCode(response?.error ?? "500"),
            getErrorMessage(response?.error ?? ""),
         );
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
