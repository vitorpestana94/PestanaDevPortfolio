import useLoginEmailFormInput from "../LoginEmailFormInput/useLoginEmailFormInput";

export default function useSignUpEmailFormInput(
  isEmailAlreadyRegistered: boolean,
  setEmailError: (isError: boolean) => void
) {
  const {
    getErrorMessage,
    verifyEmail,
    t,
    isEmailEmpty,
    isEmailFormatInvalid,
  } = useLoginEmailFormInput({
    isEmailAlreadyRegistered,
    setEmailError,
  });

  return {
    getErrorMessage,
    verifyEmail,
    isEmailEmpty,
    isEmailAlreadyRegistered,
    t,
    isEmailFormatInvalid,
  };
}
