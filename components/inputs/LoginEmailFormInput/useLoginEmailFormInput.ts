import isEmailValid from "@/utils/strings/verifyEmailFormat";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import useFormError from "@/models/interfaces/UI/useLoginFormError";

export default function useLoginEmailFormInput({
  isEmailAlreadyRegistered,
  isConfirmationCodeEmailAlreadySent,
  setEmailError,
}: useFormError) {
  const t = useTranslations();
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [isEmailFormatInvalid, setIsEmailFormatInvalid] =
    useState<boolean>(false);

  async function verifyEmail(
    event?: React.FocusEvent<HTMLInputElement, Element>,
  ) {
    const email = event?.target.value;

    if (!email) {
      setIsEmailEmpty(true);
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
    let errorMessage: string = "";

    if (isEmailFormatInvalid) {
      errorMessage = t("auth.login.form.errors.emailFormat");
    } else if (isEmailEmpty) {
      errorMessage = t("auth.login.form.errors.email");
    } else if (isEmailAlreadyRegistered) {
      errorMessage = t("auth.signUp.form.errors.alreadyRegistered");
    } else if (isConfirmationCodeEmailAlreadySent) {
      errorMessage = t(
        "auth.signUp.form.errors.confirmationCodeEmailAlreadySent",
      );
    }

    return errorMessage;
  }

  useEffect(() => {
    if (isEmailEmpty || isEmailFormatInvalid) {
      setEmailError!(true);
    } else {
      setEmailError!(false);
    }
  }, [isEmailEmpty, isEmailFormatInvalid]);

  return {
    getErrorMessage,
    verifyEmail,
    t,
    isEmailEmpty,
    isEmailFormatInvalid,
  };
}
