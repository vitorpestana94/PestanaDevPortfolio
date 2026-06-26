import { useState, useEffect } from "react";
import { useIsEmailRegistered } from "@/hooks/api/signUp/queries";
import { useTranslations } from "next-intl";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useCheckConfirmationCodeEmailAlreadySent } from "@/hooks/api/confirmationCode/queries";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";

export default function useSignUpFirstStep(
   nextStep?: () => void,
   email?: string,
   isForgotPassword?: boolean,
   confrimationCodeEmailKind?: ConfirmationCodeEmailKind,
) {
   const locale = useLocale();
   const t = useTranslations();
   const [isEmailAlreadyRegistered, setIsEmailAlreadyRegistered] =
      useState<boolean>(false);

   const [
      isConfirmationCodeEmailAlreadySent,
      setIsConfirmationCodeEmailAlreadySent,
   ] = useState<boolean>(false);

   const {
      data: isEmailRegisteredData,
      refetch: getIsEmailRegistered,
      isFetching,
   } = useIsEmailRegistered(email);

   const { mutateAsync, isSuccess, isPending } = useSendConfirmationCodeEmail();

   const {
      data: confirmationCodeAlreadySentData,
      refetch: getConfirmationCodeEmailAlreadySent,
      isFetching: isFetchingConfirmationCodeAlreadySent,
   } = useCheckConfirmationCodeEmailAlreadySent(email!);

   async function request() {
      const captchaToken = await getCaptchaToken();

      if (!captchaToken) throw Error("Captcha token is null or empty");

      if (isPending) return;

      mutateAsync({
         clientEmail: email!,
         clientLocale: locale,
         captchaToken: captchaToken,
         confirmationCodeEmailType:
            confrimationCodeEmailKind ?? ConfirmationCodeEmailKind.SignUp,
      });
   }

   useEffect(() => {
      if (!isPending) {
         if (isSuccess) {
            nextStep!();
         }
      }
   }, [isSuccess]);

   useEffect(() => {
      if (!isFetchingConfirmationCodeAlreadySent) {
         if (confirmationCodeAlreadySentData?.confirmationCodeAlreadySent) {
            setIsConfirmationCodeEmailAlreadySent(true);
         } else {
            setIsConfirmationCodeEmailAlreadySent(false);
         }
      }
   }, [confirmationCodeAlreadySentData]);

   useEffect(() => {
      if (!isForgotPassword) {
         if (!isFetching && !isFetchingConfirmationCodeAlreadySent) {
            if (isEmailRegisteredData && confirmationCodeAlreadySentData) {
               if (
                  !isEmailRegisteredData.isRegistered &&
                  !confirmationCodeAlreadySentData.confirmationCodeAlreadySent
               ) {
                  request();
               }
            }
         }
      } else {
         if (confirmationCodeAlreadySentData) {
            if (!confirmationCodeAlreadySentData.confirmationCodeAlreadySent) {
               request();
            }
         }
      }
   }, [isEmailRegisteredData, confirmationCodeAlreadySentData]);

   useEffect(() => {
      if (!isForgotPassword) {
         if (!isFetching) {
            if (isEmailRegisteredData) {
               if (isEmailRegisteredData.isRegistered) {
                  setIsEmailAlreadyRegistered(true);
               } else {
                  setIsEmailAlreadyRegistered(false);
               }
            }
         }
      }
   }, [isEmailRegisteredData]);

   async function submit(): Promise<void> {
      if (!email) return;

      if (!isForgotPassword) {
         await getIsEmailRegistered();
      }

      await getConfirmationCodeEmailAlreadySent();
   }

   return {
      isRequestError:
         isEmailAlreadyRegistered || isConfirmationCodeEmailAlreadySent,
      t,
      isEmailAlreadyRegistered,
      isConfirmationCodeEmailAlreadySent,
      isLoading:
         isFetching || isPending || isFetchingConfirmationCodeAlreadySent,
      submit,
      setIsEmailAlreadyRegistered,
   };
}
