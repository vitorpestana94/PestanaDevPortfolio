import Password from "@/components/inputs/PasswordInput/PasswordInput";
import Interface from "./ChangePasswordFirstStepInterface";
import useChangePasswordFirstStep from "./useChangePasswordFirstStep";
import Register from "@/components/buttons/formButton/FormButton";
import Wrapper from "@/components/wrappers/FormWrapper";
import ChangePassword from "@/components/paragraphs/FormParagraph";
import Script from "next/script";
import ReCaptcha from "@/components/divs/ReCaptchaDiv";

if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
   throw Error("BUILD ERROR: RECAPTCHA PUBLIC KEY NOT SETTED");
}

export default function ChangePasswordFirstStep({
   request,
   userEmail,
   nextStep,
   setCurrentPassword,
   setNewPassword,
}: Interface) {
   const { isFormError, t, style, isLoading, setIsFormError, submit } =
      useChangePasswordFirstStep({
         userEmail,
         nextStep,
      });

   return (
      <section className="profileFormDiv">
         <ChangePassword text={t("changePassword.title")} />
         <Wrapper className="3xl:w-1/2 max-w-80">
            <div className="flex flex-col justify-center items-center gap-y-10 w-full">
               <div className="changePasswordInputDivs">
                  <p className="profileDataLabel">
                     {t("changePassword.current")}
                  </p>
                  {/* <Password
                     placeholder={t("changePassword.placeholders.current")}
                     errorMessage={t("changePassword.currentErrorMessage")}
                     password={request.currentPassword}
                     isCurrentPasswordInput
                     setPassword={setCurrentPassword}
                     setIsFormError={setIsFormError}
                     style={style}
                  /> */}
               </div>
               <div className="changePasswordInputDivs gap-y-4!">
                  <div className="changePasswordInputDivs">
                     <p className="profileDataLabel">
                        {t("changePassword.new")}
                     </p>
                     {/* <Password
                        placeholder={t("changePassword.placeholders.new")}
                        password={request.newPassword}
                        setPassword={setNewPassword}
                        setIsFormError={setIsFormError}
                        style={style}
                     /> */}
                  </div>
                  {/* <Password
                     isPasswordConfirmation
                     placeholder={t("changePassword.placeholders.confirm")}
                     password={request.newPassword}
                     setPassword={setNewPassword}
                     setIsFormError={setIsFormError}
                     style={style}
                  /> */}
               </div>
            </div>
         </Wrapper>
         <ReCaptcha>
            <Register
               isLoading={isLoading}
               buttonLabel={t("changePassword.button")}
               isFormWithErrors={
                  isFormError.passwordConfirmationError ||
                  isFormError.passwordError
               }
               styles=" w-4/12! lg:w-3/12! max-w-50"
               submit={submit}
            />
         </ReCaptcha>
         <Script
            strategy="afterInteractive"
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
         />
      </section>
   );
}
