import { useEffect } from "react";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import Interface from "./EditProfileFirstStepInterface";
import { useTranslations } from "next-intl";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";
import { useSession } from "next-auth/react";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";

export default function useEditProfileFirstStep({
   email,
   name,
   submit,
   nextStep,
}: Interface) {
   const locale = useLocale();
   const t = useTranslations("user");
   const { update } = useSession();

   const {
      mutateAsync: mutateAsync,
      isSuccess,
      isPending,
   } = useSendConfirmationCodeEmail();

   async function submitUpdate(): Promise<void> {
      if (isPending) return;

      if (email) {
         const captchaToken = await getCaptchaToken();

         if (!captchaToken) throw Error("Captcha token is null or empty");

         await mutateAsync({
            clientEmail: email,
            clientLocale: locale,
            confirmationCodeEmailType:
               ConfirmationCodeEmailKind.CredentialsChange,
            captchaToken: captchaToken,
         });
      }
   }

   async function updateNameOnly(data: ChangeUserDataRequestDto){
      await submit(data);
      await update({
         user: {
            name: data.name,
         },
      });
   }

   useEffect(() => {
      if (isSuccess) {
         nextStep();
      }
   }, [isSuccess]);

   return {
      dataNotChanged:
         (email === undefined || email === "") &&
         (name === undefined || name === ""),
      t,
      isLoading: isPending,
      submitUpdate,
      updateNameOnly
   };
}
