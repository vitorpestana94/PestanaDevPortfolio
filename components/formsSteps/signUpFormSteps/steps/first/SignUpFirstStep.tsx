import SignUpFirstStepInterface from "./SignUpFirstStepInterface";
import SignUpWithPlatform from "@/components/divs/PlatformsLoginDiv/PlatformsLoginDiv";
import Or from "@/components/hrs/OrHr";
import Wrapper from "@/components/wrappers/FormWrapper";
import Email from "@/components/inputs/SignUpEmailFormInput/SignUpEmailFormInput";
import useSignUpFirstStep from "./useSignUpFirstStep";
import StartSignUpButton from "@/components/buttons/formButton/FormButton";
import Error from "@/components/errors/error/Error";
import SignUpTitle from "@/components/titles/SignUpTitle";
import ReCaptcha from "@/components/divs/ReCaptchaDiv";

export default function SignUpFirstStep({
   nextStep,
   email,
   setEmail,
}: SignUpFirstStepInterface) {
   const {
      t,
      isEmailError,
      isEmailVerificationsError,
      isLoading,
      isConfirmationCodeEmailAlreadySent,
      setIsEmaiLError,
      submit,
   } = useSignUpFirstStep(nextStep, email);

   return (
      <div className="w-full h-[90%] flex flex-col justify-around items-center">
         <SignUpTitle />
         <SignUpWithPlatform />
         <Or />
         <Wrapper>
            <div className="flex flex-col items-center justify-between gap-y-1 lg:gap-y-6">
               <Email setIsEmaiLError={setIsEmaiLError} setEmail={setEmail} />
               <Error
                  shouldRender={isEmailVerificationsError}
                  styles="self-start"
                  message={
                     isConfirmationCodeEmailAlreadySent
                        ? t(
                             "auth.sign-up.form.errors.confirmationCodeEmailAlreadySent",
                          )
                        : t("auth.sign-up.form.errors.alreadyRegistered")
                  }
               />
               <ReCaptcha>
                  <StartSignUpButton
                     styles={`${isEmailError || isEmailVerificationsError ? "mt-1" : "mt-4"}`}
                     submit={submit}
                     isLoading={isLoading}
                     isFormWithErrors={
                        isEmailError || isEmailVerificationsError
                     }
                     buttonLabel={t("auth.sign-up.form.firstStep.button")}
                  />
               </ReCaptcha>
            </div>
         </Wrapper>
      </div>
   );
}
