import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useSendContactEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";
import { useForm } from "react-hook-form";

export default function useHomeFooterForm() {
   const locale = useLocale();
   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm<SendContactEmailRequest>({
      mode: "onBlur",
      defaultValues: {
         clientLocale: locale,
         confirmationCodeEmailType: ConfirmationCodeEmailKind.Contact,
      },
   });
   const t = useTranslations("home");
   const {
      mutateAsync,
      reset: resetMutation,
      data,
      isPending,
      isSuccess,
   } = useSendContactEmail();

   async function submit(data: SendContactEmailRequest) {
      const captchaToken = await getCaptchaToken();

      if (!captchaToken) throw Error("Captcha token is null or empty");

      mutateAsync(
         { ...data, captchaToken: captchaToken },
         {
            onSuccess: () => {
               reset();
            },
         },
      );
   }

   useEffect(() => {
      if (isSuccess) {
         setTimeout(() => {
            resetMutation();
         }, 5000);
      }
   }, [isSuccess]);

   return {
      t,
      data,
      isPending,
      isSuccess,
      errors,
      isFormWithError:
         errors.clientEmail?.message !== undefined ||
         errors.clientName?.message !== undefined ||
         errors.clientMessage !== undefined,
      submit,
      register,
      handleSubmit,
   };
}
