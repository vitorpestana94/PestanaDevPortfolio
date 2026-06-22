import { useEffect, useState } from "react";
import useStepInterface from "@/models/interfaces/UI/useStepInterface";
import { useTranslations } from "next-intl";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import { useLocale } from "next-intl";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";

export default function useDeleteAccountFirstStep({
   userEmail,
   nextStep,
}: useStepInterface & { userEmail: string }) {
   const locale = useLocale();
   const t = useTranslations("profile.deleteAccount");
   const { mutateAsync, isSuccess, isPending } = useSendConfirmationCodeEmail();

   const [deleteConfirmationWasNotClicked, setDeleteConfirmationWasNotClicked] =
      useState<boolean>(true);

   function handleDeleteClick() {
      setDeleteConfirmationWasNotClicked(!deleteConfirmationWasNotClicked);
   }

   async function submit(): Promise<void> {
      const captchaToken = await getCaptchaToken();

      if (!captchaToken) throw Error("Captcha token is null or empty");

      if (isPending) return;

      await mutateAsync({
         clientEmail: userEmail,
         clientLocale: locale,
         confirmationCodeEmailType: ConfirmationCodeEmailKind.DeleteAccount,
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
      deleteConfirmationWasNotClicked,
      handleDeleteClick,
      submit,
   };
}
