import Interface from "./ForgotPasswordFirstStepInterface";
import Email from "@/components/inputs/SignUpEmailFormInput/SignUpEmailFormInput";
import Error from "@/components/errors/error/Error";
import RecoverButton from "@/components/buttons/formButton/FormButton";
import Wrapper from "@/components/wrappers/FormWrapper";
import useForgotPasswordFirstStep from "@/components/formsSteps/signUpFormSteps/steps/first/useSignUpFirstStep";
import ForgotPassword from "@/components/titles/ForgotPasswordTitle";
import Line from "@/components/hrs/GenericHr";
import BackToLogin from "@/components/buttons/backToLoginButton/BackToLoginButton";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import ReCaptcha from "@/components/divs/ReCaptchaDiv";

export default function FirstStep({ email, setEmail, nextStep }: Interface) {
   const {
      t,
      isEmailError,
      isEmailVerificationsError,
      isLoading,
      setIsEmaiLError,
      submit,
   } = useForgotPasswordFirstStep(
      nextStep,
      email,
      true,
      ConfirmationCodeEmailKind.ForgotPassword,
   );

   return (
      <div className="w-full h-full flex flex-col justify-around items-center">
         <BackToLogin />
         <ForgotPassword />
         <Line text={t("auth.forgot-password.form.firstStep.hr")} />
         <Wrapper>
            <div className="flex flex-col items-center justify-between gap-y-5 lg:gap-y-6">
               <Email setIsEmaiLError={setIsEmaiLError} setEmail={setEmail} />
               <Error
                  shouldRender={isEmailVerificationsError}
                  message={t(
                     "auth.sign-up.form.errors.confirmationCodeEmailAlreadySent",
                  )}
               />
               <ReCaptcha styles={{ mainDiv: { className: "mt-5" } }}>
                  <RecoverButton
                     submit={submit}
                     isLoading={isLoading}
                     isFormWithErrors={isEmailError}
                     buttonLabel={t(
                        "auth.forgot-password.form.firstStep.button",
                     )}
                  />
               </ReCaptcha>
            </div>
         </Wrapper>
      </div>
   );
}
