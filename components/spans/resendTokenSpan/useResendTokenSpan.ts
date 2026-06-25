"use client";

import { useState, useEffect } from "react";
import Interface from "./ResendTokenSpanInterface";
import { useLocale, useTranslations } from "next-intl";
import { useResendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";

export default function useResendTokenSpan({ email }: Interface) {
   const thirtySeconds = 30;
   const t = useTranslations("auth.sign-up.form.secondStep.resendToken");
   const locale = useLocale();
   const { mutateAsync, isPending, isSuccess, data } =
      useResendConfirmationCodeEmail();

   const [seconds, setSeconds] = useState<number>(thirtySeconds);
   const [resendings, setResendings] = useState<number>(1);

   async function handleClick() {
      const captchaToken = await getCaptchaToken();

      if (!captchaToken) throw Error("Captcha token is null or empty");

      if (isPending) {
         return;
      }

      await mutateAsync({
         clientEmail: email,
         clientLocale: locale,
         captchaToken: captchaToken,
         confirmationCodeEmailType: ConfirmationCodeEmailKind.ForgotPassword,
      });
   }

   useEffect(() => {
      if (seconds <= 0) return;

      const interval = setInterval(() => {
         setSeconds((previous) => previous - 1);
      }, 1000);

      return () => clearInterval(interval);
   }, [seconds]);

   useEffect(() => {
      if (isSuccess) {
         setResendings(resendings + 1);

         setSeconds(thirtySeconds);
      }
   }, [isSuccess]);

   return {
      t,
      resendings,
      isPending,
      isSuccess,
      data,
      seconds,
      mutateAsync,
      setSeconds,
      handleClick,
      setResendings,
   };
}
