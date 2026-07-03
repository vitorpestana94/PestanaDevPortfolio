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
import Form from "@/components/forms/DefaultForm/DefaultForm";

export default function FirstStep({
   email,
   errors,
   register,
   handleSubmit,
   nextStep,
}: Interface) {
   const { t, isLoading, isRequestError, submit } = useForgotPasswordFirstStep(
      nextStep,
      email,
      true,
      ConfirmationCodeEmailKind.ForgotPassword,
   );

   return (
      <Form
         handleSubmit={handleSubmit!}
         onSubmit={submit}
         className="w-full h-full flex flex-col justify-around items-center"
      >
         <BackToLogin />
         <ForgotPassword />
         <Line text={t("auth.forgot-password.form.firstStep.hr")} />
         <Wrapper>
            <div className="flex flex-col items-center justify-between gap-y-5 lg:gap-y-6">
               <Email
                  errors={errors}
                  register={register}
                  emailInputPlaceHolder={t("auth.sign-up.form.firstStep.email")}
               />
               <Error
                  shouldRender={isRequestError}
                  message={t(
                     "auth.sign-up.form.errors.confirmationCodeEmailAlreadySent",
                  )}
               />
               <ReCaptcha styles={{ mainDiv: { className: "mt-5" } }}>
                  <RecoverButton
                     isLoading={isLoading}
                     isFormWithErrors={errors?.email !== undefined}
                     buttonLabel={t(
                        "auth.forgot-password.form.firstStep.button",
                     )}
                  />
               </ReCaptcha>
            </div>
         </Wrapper>
      </Form>
   );
}
