import Email from "@/components/inputs/LoginEmailFormInput/LoginEmailFormInput";
import Password from "../../inputs/LoginPasswordFormInput/LoginPasswordFormInput";
import LoginButton from "../../buttons/formButton/FormButton";
import useLoginInputsDiv from "./useLoginInputsDiv";
import Error from "@/components/errors/error/Error";
import Interface from "@/components/forms/loginForm/LoginFormInterface";
import ForgotPassword from "@/components/paragraphs/forgotPassword/ForgotPasswordParagraph";
import ReCaptcha from "@/components/divs/ReCaptchaDiv";
import ErrorModal from "@/components/modals/ErrorModal";

export default function loginInputsDiv({ switchToForgotPassword }: Interface) {
   const {
      formErros,
      t,
      shouldRenderExpectedError,
      isLoading,
      isError,
      setEmailError,
      setPasswordError,
      setEmail,
      submit,
      setPassword,
   } = useLoginInputsDiv();

   return (
      <div className="flex flex-col gap-y-2 items-center">
         <div className="w-full flex flex-col items-center gap-y-2">
            <Email setEmailError={setEmailError} setEmail={setEmail} />
            <span className="w-full flex flex-col gap-y-3">
               <Password
                  isInputWithError={formErros.password}
                  setPasswordError={setPasswordError}
                  setPassword={setPassword}
               />
               <ForgotPassword
                  switchToForgotPassword={switchToForgotPassword}
                  text={t("auth.login.form.forgot")}
               />
            </span>
            {
               <Error
                  position="left"
                  shouldRender={shouldRenderExpectedError}
                  message={
                     formErros.invalidCredentials
                        ? t("auth.login.form.errors.invalidCredentials")
                        : t("auth.login.form.errors.invalidLoginEndpoint")
                  }
                  styles="self-start"
               />
            }
         </div>
         <ReCaptcha>
            <LoginButton
               isLoading={isLoading}
               buttonLabel={t("auth.login.form.title")}
               isFormWithErrors={formErros.email || formErros.email}
               submit={submit}
            />
         </ReCaptcha>
         <ErrorModal isError={isError} />
      </div>
   );
}
