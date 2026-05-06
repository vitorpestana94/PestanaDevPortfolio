import useLoginEmailFormInput from "../LoginEmailFormInput/useLoginEmailFormInput";
import { useState, useEffect } from "react";

export default function useSignUpEmailFormInput(
  isEmailError: boolean,
  isEmailAlreadyRegistered: boolean,
  isConfirmationCodeEmailAlreadySent: boolean,
  setEmailError: (isError: boolean) => void,
) {
  const {
    getErrorMessage,
    verifyEmail,
    t,
    isEmailEmpty,
    isEmailFormatInvalid,
  } = useLoginEmailFormInput({
    isConfirmationCodeEmailAlreadySent,
    isEmailAlreadyRegistered,
    setEmailError,
  });

  const [shoudlRenderError, setShoudlRenderError] = useState<boolean>(false);

  useEffect(() => {
    if (
      isEmailAlreadyRegistered ||
      isEmailError ||
      isEmailEmpty ||
      isEmailFormatInvalid
    ) {
      setShoudlRenderError(true);
    } else {
      setShoudlRenderError(false);
    }
  }, [
    isEmailError,
    isEmailEmpty,
    isEmailFormatInvalid,
    isEmailAlreadyRegistered,
    isConfirmationCodeEmailAlreadySent,
  ]);

  return {
    getErrorMessage,
    verifyEmail,
    shoudlRenderError,
    isEmailEmpty,
    isEmailAlreadyRegistered,
    t,
    isEmailFormatInvalid,
  };
}
