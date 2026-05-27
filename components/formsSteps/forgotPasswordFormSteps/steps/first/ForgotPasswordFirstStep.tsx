import Interface from "./ForgotPasswordFirstStepInterface";
import Email from "@/components/inputs/SignUpEmailFormInput/SignUpEmailFormInput";
import Error from "@/components/errors/error/Error";
import RecoverButton from "@/components/buttons/authButton/AuthButton";
import Wrapper from "@/components/wrappers/AuthWrapper";
import useForgotPasswordFirstStep from "@/components/formsSteps/signUpFormSteps/steps/first/useSignUpFirstStep";
import ForgotPassword from "@/components/titles/ForgotPasswordTitle";
import Line from "@/components/hrs/GenericHr";

export default function FirstStep({ email, setEmail, nextStep }: Interface) {
   const {
      t,
      isEmailError,
      isEmailVerificationsError,
      isLoading,
      setIsEmaiLError,
      submit,
   } = useForgotPasswordFirstStep(nextStep, email, true);

   return (
      <div className="w-full h-[90%] flex flex-col justify-around items-center">
         <ForgotPassword />
         <Line text={t("auth.forgotPassword.form.firstStep.hr")} />
         <Wrapper>
            <div className="flex flex-col items-center justify-between gap-y-1 lg:gap-y-6">
               <Email setIsEmaiLError={setIsEmaiLError} setEmail={setEmail} />
               <Error
                  shouldRender={isEmailVerificationsError}
                  message={t(
                     "auth.signUp.form.errors.confirmationCodeEmailAlreadySent",
                  )}
               />
               <RecoverButton
                  submit={submit}
                  isLoading={isLoading}
                  isFormWithErrors={isEmailError}
                  buttonLabel={t("auth.forgotPassword.form.firstStep.button")}
               />
            </div>
         </Wrapper>
      </div>
   );
}
