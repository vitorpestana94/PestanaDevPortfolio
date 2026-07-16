import { useEffect } from "react";

import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import useStepInterface from "@/models/interfaces/UI/useStepInterface";
import { useTranslations } from "next-intl";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";

export default function useChangePasswordFirstStep({
   userEmail,
   nextStep,
}: { userEmail: string } & useStepInterface) {
   const t = useTranslations("user");
   const locale = useLocale();
   const { mutateAsync, isSuccess, isPending } = useSendConfirmationCodeEmail();

   async function submit(_: ChangeUserPasswordRequestDto): Promise<void> {
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
      t,
      isLoading: isPending,
      submit,
   };
}
