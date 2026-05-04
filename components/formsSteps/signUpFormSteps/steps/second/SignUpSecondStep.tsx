import useConfirmationCodeInput from "./useSignUpSecondStep";
import Interface from "./SignUpSecondStepInterface";
import Button from "@/components/buttons/authButton/AuthButton";
import ResendToken from "@/components/spans/resendTokenSpan/ResendTokenSpan";

export default function SignUpSecondStep({ email, nextStep }: Interface) {
  const {
    keys,
    refs,
    error,
    isError,
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
      <div className="flex flex-col gap-y-5">
        <div
          className="flex select-none w-full justify-center
          gap-x-3
          sm:gap-x-5 sm:mt-10"
        >
          {keys.map((key) => (
            <input
              key={key}
              ref={refs[key]}
              type="text"
              maxLength={1}
              className={`aspect-74/50 text-white placeholder:text-gray-500 select-none text-center rounded-[5px] bg-gray-800
              w-[20%] text-[1rem]
              sm:w-[84px]`}
              placeholder={getRandomDefault()}
              onChange={(event) => handleInputChange(event, key)}
              onKeyDown={(event) => handleOnKeyDown(event, key)}
            />
          ))}
        </div>
        <ResendToken email={email} />
      </div>
      <Button
        buttonLabel={t("auth.signUp.form.secondStep.button")}
        isFormWithErrors={isError}
        submit={handleButtonClick}
      />
    </section>
  );
}
