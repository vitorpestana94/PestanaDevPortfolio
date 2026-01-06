import Email from "../emailInput/EmailInput";
import useSignUpEmailFormInput from "./useSignUpEmailFormInput";
import SignUpEmailFormatInputInterface from "./SignUpEmailFormatInputInterface";

export default function SignUpEmailFormInput({
  isEmailError,
  isEmailAlreadyRegistered,
  setEmail,
  setIsEmaiLError,
}: SignUpEmailFormatInputInterface) {
  const { getErrorMessage, verifyEmail, t } = useSignUpEmailFormInput(
    isEmailAlreadyRegistered,
    setIsEmaiLError
  );

  return (
    <Email
      verifyEmail={verifyEmail}
      getErrorMessage={getErrorMessage}
      setEmail={setEmail}
      shoudlRenderError={isEmailError || isEmailAlreadyRegistered}
      emailInputPlaceHolder={t("auth.signUp.form.firstStep.email")}
    />
  );
}
