import useLoginEmailFormInput from "../LoginEmailFormInput/useLoginEmailFormInput";
import { useState, useEffect } from "react";

export default function useSignUpEmailFormInput(
  setEmailError: (isError: boolean) => void,
) {
  const {
    getErrorMessage,
    verifyEmail,
    t,
    isEmailEmpty,
    isEmailFormatInvalid,
  } = useLoginEmailFormInput({
    setEmailError,
  });

  const [shoudlRenderError, setShoudlRenderError] = useState<boolean>(false);

  useEffect(() => {
    if (isEmailEmpty || isEmailFormatInvalid) {
      setShoudlRenderError(true);
    } else {
      setShoudlRenderError(false);
    }
  }, [isEmailEmpty, isEmailFormatInvalid]);

  return {
    getErrorMessage,
    verifyEmail,
    shoudlRenderError,
    isEmailEmpty,
    t,
    isEmailFormatInvalid,
  };
}
