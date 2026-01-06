import isEmailValid from "@/utils/strings/verifyEmailFormat";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import useFormError from "@/models/interfaces/UI/useLoginFormError";

export default function useLoginEmailFormInput({
  isEmailAlreadyRegistered,
  setEmailError,
}: useFormError) {
  const t = useTranslations();
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [isEmailFormatInvalid, setIsEmailFormatInvalid] =
    useState<boolean>(false);

  function verifyEmail(event: React.FocusEvent<HTMLInputElement, Element>) {
    const email = event.target.value;

    if (!email) {
      setIsEmailEmpty(true);
      setIsEmailFormatInvalid(false);
    } else {
      setIsEmailEmpty(false);

      if (!isEmailValid(email)) {
        setIsEmailFormatInvalid(true);
      } else {
        setIsEmailFormatInvalid(false);
      }
    }
  }

  function getErrorMessage(): string {
    let errordMessage: string = "";

    if (isEmailEmpty || isEmailFormatInvalid) {
      errordMessage = isEmailFormatInvalid
        ? t("auth.login.form.errors.emailFormat")
        : t("auth.login.form.errors.email");
    } else if (isEmailAlreadyRegistered) {
      errordMessage = t("auth.signUp.form.errors.alreadyRegistered");
    }

    return errordMessage;
  }

  useEffect(() => {
    if (isEmailEmpty || isEmailFormatInvalid) {
      setEmailError!(true);
    } else {
      setEmailError!(false);
    }
  }, [isEmailEmpty, isEmailFormatInvalid, isEmailAlreadyRegistered]);

  return {
    getErrorMessage,
    verifyEmail,
    t,
    isEmailEmpty,
    isEmailFormatInvalid,
  };
}
