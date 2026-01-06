import SignUpFirstStepInterface from "./SignUpFirstStepInterface";
import SignUpWithPlatform from "@/components/divs/PlatformsLoginDiv/PlatformsLoginDiv";
import Or from "@/components/hrs/LoginHr";
import Wrapper from "@/components/wrappers/AuthWrapper";
import Email from "@/components/inputs/SignUpEmailFormInput/SignUpEmailFormInput";
import useSignUpFirstStep from "./useSignUpFirstStep";
import StartSignUpButton from "@/components/buttons/authButton/AuthButton";

export default function SignUpFirstStep({
  nextStep,
  email,
  setEmail,
}: SignUpFirstStepInterface) {
  const {
    t,
    isEmailError,
    submit,
    setIsEmaiLError,
    isFetching,
    isEmailAlreadyRegistered,
  } = useSignUpFirstStep(nextStep, email);

  return (
    <div className="w-full h-[90%] flex flex-col justify-around items-center">
      <SignUpWithPlatform />
      <Or />
      <Wrapper>
        <div className="flex flex-col justify-around gap-y-6">
          <Email
            isEmailError={isEmailError}
            setIsEmaiLError={setIsEmaiLError}
            isEmailAlreadyRegistered={isEmailAlreadyRegistered}
            setEmail={setEmail}
          />
          <StartSignUpButton
            submit={submit}
            isFormWithErrors={isEmailError}
            buttonLabel={t("auth.signUp.form.firstStep.button")}
          />
        </div>
      </Wrapper>
    </div>
  );
}
