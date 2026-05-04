"use client";

import { useState, useEffect } from "react";
import Interface from "./ResendTokenSpanInterface";
import { useLocale, useTranslations } from "next-intl";
import { useResendConfirmationCodeEmail } from "@/hooks/api/email/mutation";

export default function useResendTokenSpan({ email }: Interface) {
  const thirtySeconds = 30;
  const t = useTranslations("auth.signUp.form.secondStep.resendToken");
  const locale = useLocale();
  const { mutateAsync, isError, isPending, isSuccess, data } =
    useResendConfirmationCodeEmail();

  const [seconds, setSeconds] = useState<number>(thirtySeconds);
  const [resendings, setResendings] = useState<number>(1);

  async function handleClick() {
    if (isPending) {
      return;
    }

    await mutateAsync({ clientEmail: email, clientLocale: locale });
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
    isError,
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
