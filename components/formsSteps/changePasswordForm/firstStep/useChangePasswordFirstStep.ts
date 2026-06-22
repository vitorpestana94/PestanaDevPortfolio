import { useEffect, useState } from "react";

import { FormErrors } from "../../signUpFormSteps/steps/third/useSignUpThirdStep";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import useStepInterface from "@/models/interfaces/UI/useStepInterface";
import { useTranslations } from "next-intl";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";

export default function useChangePasswordFirstStep({
   userEmail,
   nextStep,
}: { userEmail: string } & useStepInterface) {
   const style = {
      mainDiv: {
         className: "bg-gray-200!",
      },
   };
   const t = useTranslations("profile");
   const locale = useLocale();
   const { mutateAsync, isSuccess, isPending } = useSendConfirmationCodeEmail();

   const [isFormError, setIsFormError] = useState<FormErrors>({
      nameError: false,
      passwordError: false,
      passwordConfirmationError: false,
   });

   async function submit(): Promise<void> {
      const captchaToken = await getCaptchaToken();

      if (!captchaToken) throw Error("Captcha token is null or empty");

      if (isPending) return;

      await mutateAsync({
         clientEmail: userEmail,
         clientLocale: locale,
         confirmationCodeEmailType: ConfirmationCodeEmailKind.CredentialsChange,
         captchaToken: captchaToken,
      });
   }

   useEffect(() => {
      if (isSuccess) {
         nextStep!();
      }
   }, [isSuccess]);

   return {
      isFormError,
      t,
      style,
      isLoading: isPending,
      submit,
      setIsFormError,
   };
}
