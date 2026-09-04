import Password from "../../inputs/LoginPasswordFormInput/LoginPasswordFormInput";
import LoginButton from "../../buttons/formButton/FormButton";
import useLoginInputsDiv from "./useLoginInputsDiv";
import ForgotPassword from "@/components/paragraphs/forgotPassword/ForgotPasswordParagraph";
import ReCaptcha from "@/components/divs/ReCaptchaDiv";
import Form from "@/components/forms/DefaultForm/DefaultForm";
import Email from "@/components/inputs/emailInput/EmailInput";
import LoginSignUpSwitch from "@/components/buttons/switchAutoButton/SwitchAutoButton";
import BackToHome from "@/components/buttons/backToHomeButton/BackToHome";

export default function loginInputsDiv() {
   const { t, isLoading, errors, register, handleSubmit, submit } =
      useLoginInputsDiv();

   return (
      <Form
         onSubmit={submit}
         handleSubmit={handleSubmit}
         className="flex flex-col gap-y-2 items-center"
      >
         <BackToHome 
            buttonLabel={t("termsAndConditions.backToHome")} 
            className="backHomeAuth" 
            iconClassName="w-4! md:w-8!"
            labelClassName="authButtonsLabelsSizes"/>
         <LoginSignUpSwitch />
         <div className="w-full flex flex-col items-center gap-y-2">
            <Email
               errors={errors}
               register={register}
               emailInputPlaceHolder={t("auth.login.form.email")}
            />
            <span className="w-full flex flex-col gap-y-3">
               <Password register={register} errors={errors} />
               <ForgotPassword text={t("auth.login.form.forgot")} />
            </span>
         </div>
         <ReCaptcha>
            <LoginButton
               isLoading={isLoading}
               buttonLabel={t("auth.login.form.title")}
               isFormWithErrors={
                  errors?.password !== undefined || errors?.email !== undefined
               }
            />
         </ReCaptcha>
      </Form>
   );
}
