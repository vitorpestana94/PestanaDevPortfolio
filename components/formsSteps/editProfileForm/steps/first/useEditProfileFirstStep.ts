import { useEffect } from "react";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import Interface from "./EditProfileFirstStepInterface";
import { useTranslations } from "next-intl";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";

export default function useEditProfileFirstStep({
   submit,
   request,
   nextStep,
}: Interface) {
   const locale = useLocale();
   const t = useTranslations("user");

   const {
      mutateAsync: mutateAsync,
      isSuccess,
      isPending,
   } = useSendConfirmationCodeEmail();

   async function submitUpdate(): Promise<void> {
      if (isPending) return;

      if (request.email) {
         const captchaToken = await getCaptchaToken();

         if (!captchaToken) throw Error("Captcha token is null or empty");

         await mutateAsync({
            clientEmail: request.email,
            clientLocale: locale,
            confirmationCodeEmailType:
               ConfirmationCodeEmailKind.CredentialsChange,
            captchaToken: captchaToken,
         });
      } else {
         await submit();
      }
   }

   useEffect(() => {
      if (isSuccess) {
         nextStep();
      }
   }, [isSuccess]);

   return {
      dataNotChanged: request.email === undefined && request.name === undefined,
      t,
      submitUpdate,
      isLoading: isPending,
   };
}
