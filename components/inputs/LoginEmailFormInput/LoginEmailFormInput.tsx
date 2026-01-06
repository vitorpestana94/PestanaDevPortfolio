import LoginEmailFormInputInterface from "./LoginEmailFormInputInterface";
import useLoginEmailFormInput from "./useLoginEmailFormInput";
import EmailInput from "../emailInput/EmailInput";

export default function LoginEmailFormInput({
  setEmail,
  setEmailError,
}: LoginEmailFormInputInterface) {
  const {
    getErrorMessage,
    verifyEmail,
    t,
    isEmailEmpty,
    isEmailFormatInvalid,
  } = useLoginEmailFormInput({
    setEmailError,
  });

  return (
    <EmailInput
      verifyEmail={verifyEmail}
      getErrorMessage={getErrorMessage}
      setEmail={setEmail}
      shoudlRenderError={isEmailEmpty || isEmailFormatInvalid}
      emailInputPlaceHolder={t("auth.login.form.email")}
    />
  );
}
