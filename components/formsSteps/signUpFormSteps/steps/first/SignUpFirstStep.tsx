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
import Form from "@/components/forms/DefaultForm/DefaultForm";

export default function SignUpFirstStep({
   errors,
   handleSubmit,
   register,
   nextStep,
   email,
}: SignUpFirstStepInterface) {
   const {
      t,
      isLoading,
      isRequestError,
      isConfirmationCodeEmailAlreadySent,
      submit,
   } = useSignUpFirstStep(nextStep, email, false);

   return (
      <Form
         handleSubmit={handleSubmit!}
         onSubmit={submit}
         className="w-full h-[90%] flex flex-col justify-around items-center"
      >
         <SignUpTitle />
         <SignUpWithPlatform />
         <Or />
         <Wrapper>
            <div className="flex flex-col items-center justify-between gap-y-1 lg:gap-y-6">
               <Email
                  errors={errors}
                  register={register}
                  emailInputPlaceHolder={t("auth.sign-up.form.firstStep.email")}
               />
               <Error
                  shouldRender={isRequestError}
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
                     styles={`${isRequestError ? "mt-1" : "mt-4"}`}
                     isLoading={isLoading}
                     isFormWithErrors={errors?.email != undefined}
                     buttonLabel={t("auth.sign-up.form.firstStep.button")}
                  />
               </ReCaptcha>
            </div>
         </Wrapper>
      </Form>
   );
}
