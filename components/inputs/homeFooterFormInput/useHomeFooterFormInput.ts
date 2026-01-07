import isEmailValid from "@/utils/strings/verifyEmailFormat";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function useHomeFooterFormInput() {
  const t = useTranslations();
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false);
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

  function verifyName(event: React.FocusEvent<HTMLInputElement, Element>) {
    const name = event.target.value;

    setIsNameEmpty(name ? false : true);
  }

  function getErrorMessage(): string {
    let errordMessage: string = "";

    if (isEmailEmpty || isEmailFormatInvalid) {
      errordMessage = isEmailFormatInvalid
        ? t("auth.login.form.errors.emailFormat")
        : t("auth.login.form.errors.email");
    }

    return errordMessage;
  }

  return {
    t,
    isNameEmpty,
    isEmailEmpty,
    isEmailFormatInvalid,
    verifyEmail,
    getErrorMessage,
    verifyName,
  };
}
