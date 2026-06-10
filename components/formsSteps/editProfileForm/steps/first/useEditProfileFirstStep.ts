import { useEffect } from "react";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import Interface from "./EditProfileFirstStepInterface";
import { useTranslations } from "next-intl";

export default function useEditProfileFirstStep({
   submit,
   request,
   nextStep,
}: Interface) {
   const locale = useLocale();
   const t = useTranslations("profile");

   const {
      mutateAsync: mutateAsync,
      isError,
      isSuccess,
      isPending,
   } = useSendConfirmationCodeEmail();

   async function submitUpdate(): Promise<void> {
      if (isPending) return;

      if (request.email) {
         await mutateAsync({
            clientEmail: request.email,
            clientLocale: locale,
            confirmationCodeEmailType:
               ConfirmationCodeEmailKind.CredentialsChange,
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
