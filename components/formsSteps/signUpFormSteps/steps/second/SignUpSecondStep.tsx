import useConfirmationCodeInput from "./useSignUpSecondStep";
import Interface from "./SignUpSecondStepInterface";
import Check from "@/components/buttons/authButton/AuthButton";
import ResendToken from "@/components/spans/resendTokenSpan/ResendTokenSpan";
import Error from "@/components/errors/error/Error";
import ISentAnEmail from "@/components/paragraphs/ConfirmationCodeParagraph";
import ConfirmationCode from "@/components/inputs/confirmationCodeInput/ConfirmationCodeInput";

export default function SignUpSecondStep({ email, nextStep }: Interface) {
  const {
    keys,
    refs,
    error,
    shouldShowError,
    isFormEmpty,
    t,
    handleInputChange,
    handleOnKeyDown,
    handleButtonClick,
    getRandomDefault,
  } = useConfirmationCodeInput({ email, nextStep });

  return (
    <section
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col flex-1 justify-around sm:items-center"
    >
      <div className="flex flex-col gap-y-5 px-6 sm:px-16 md:px-20">
        <ISentAnEmail text={t("paragraph")} />
        <div
          className="flex select-none w-full justify-center
          gap-x-3
          sm:gap-x-5 sm:mt-10"
        >
          <ConfirmationCode
            codeKeys={keys}
            refs={refs}
            getRandomDefault={getRandomDefault}
            handleInputChange={handleInputChange}
            handleOnKeyDown={handleOnKeyDown}
          />
        </div>
        <ResendToken email={email!} />
        <Error shouldRender={shouldShowError} message={error} />
      </div>
      <Check
        buttonLabel={t("button")}
        isFormWithErrors={isFormEmpty}
        submit={handleButtonClick}
      />
    </section>
  );
}
