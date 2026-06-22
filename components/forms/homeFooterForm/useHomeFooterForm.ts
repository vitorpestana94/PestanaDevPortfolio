import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useSendContactEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";

export default function useHomeFooterForm() {
   const locale = useLocale();
   const initial: SendContactEmailRequest = {
      clientEmail: "",
      clientName: "",
      clientMessage: "",
      clientLocale: locale,
      captchaToken: "",
      confirmationCodeEmailType: ConfirmationCodeEmailKind.Contact,
   };
   const [isFormWithError, setIsFormWithError] = useState<boolean>(false);
   const t = useTranslations("home");
   const { mutateAsync, reset, data, isPending, isSuccess } =
      useSendContactEmail();
   const [formData, setFormData] = useState<SendContactEmailRequest>(initial);

   async function submit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const target = event.currentTarget;

      const captchaToken = await getCaptchaToken();

      if (!captchaToken) throw Error("Captcha token is null or empty");

      if (
         !formData.clientEmail ||
         !formData.clientMessage ||
         !formData.clientName ||
         isFormWithError
      ) {
         setIsFormWithError(true);

         return;
      }

      mutateAsync(
         {
            clientEmail: formData.clientEmail,
            clientLocale: formData.clientLocale,
            clientMessage: formData.clientMessage,
            clientName: formData.clientName,
            captchaToken: captchaToken,
            confirmationCodeEmailType: formData.confirmationCodeEmailType,
         },
         {
            onSuccess: () => {
               setFormData(initial);
               target.reset();
            },
         },
      );
   }

   function setClientEmail(email: string) {
      setFormData((previous) => ({ ...previous, clientEmail: email }));
   }

   function setClientName(name: string) {
      setFormData((previous) => ({ ...previous, clientName: name }));
   }

   function setClientMessage(message: string) {
      setFormData((previous) => ({ ...previous, clientMessage: message }));
   }

   useEffect(() => {
      if (isSuccess) {
         setTimeout(() => {
            reset();
         }, 5000);
      }
   }, [isSuccess]);

   return {
      t,
      data,
      isPending,
      isSuccess,
      isFormWithError,
      setIsFormWithError,
      submit,
      setClientEmail,
      setClientName,
      setClientMessage,
   };
}
