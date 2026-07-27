import useHandleStep from "@/hooks/useStep";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import { useState } from "react";
import { signIn as signUp } from "next-auth/react";
import { toastError } from "@/utils/errors/toastHandlers";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { getErrorCode } from "@/utils/errors/errorMessagesHandlers";

export default function useSignUpFormSteps() {
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const {
      watch,
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<SignUpRequest>({ mode: "onBlur", reValidateMode: "onBlur" });
   const email = watch("email");
   const password = watch("password");
   const accepted = watch("acceptedTerms");

   const { step, nextStep, previousStep, setStep } = useHandleStep({
      maxSteps: 4,
   });

   const t = useTranslations();

   async function submitForm(data: SignUpRequest) {
      setIsLoading(true);

      const response = await signUp("credentials-signup", {
         request: JSON.stringify(data),
         redirect: false,
      });

      setIsLoading(false);

      if (!response) {
         toastError(t(`error.unexpected`))

         return;
      }

      if (response.ok) {
         nextStep();
      } else {
         toastError(t(`error.${getErrorCode(response?.error ?? "unexpected")}`))
      }
   }

   return {
      email,
      accepted,
      password,
      isLoading,
      step,
      errors,
      register,
      handleSubmit,
      nextStep,
      previousStep,
      setStep,
      submitForm,
   };
}
