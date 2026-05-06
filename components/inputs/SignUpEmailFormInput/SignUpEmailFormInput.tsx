import Email from "../emailInput/EmailInput";
import useSignUpEmailFormInput from "./useSignUpEmailFormInput";
import SignUpEmailFormatInputInterface from "./SignUpEmailFormatInputInterface";

export default function SignUpEmailFormInput({
  setEmail,
  setIsEmaiLError,
}: SignUpEmailFormatInputInterface) {
  const { verifyEmail, getErrorMessage, t, shoudlRenderError } =
    useSignUpEmailFormInput(setIsEmaiLError);

  return (
    <Email
      verifyEmail={verifyEmail}
      getErrorMessage={getErrorMessage}
      setEmail={setEmail}
      shoudlRenderError={shoudlRenderError}
      emailInputPlaceHolder={t("auth.signUp.form.firstStep.email")}
    />
  );
}
