import Password from "@/components/inputs/PasswordInput/PasswordInput";
import Interface from "./ChangePasswordFirstStepInterface";
import useChangePasswordFirstStep from "./useChangePasswordFirstStep";
import Register from "@/components/buttons/formButton/FormButton";
import Wrapper from "@/components/wrappers/FormWrapper";
import ChangePassword from "@/components/paragraphs/FormParagraph";
import ReCaptcha from "@/components/divs/ReCaptchaDiv";
import Form from "@/components/forms/DefaultForm/DefaultForm";
import {
   currentPassword as currentPasswordType,
   newPassword as newPasswordType,
   passwordConfirmation,
} from "@/components/inputs/PasswordInput/PasswordInputInterface";

if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
   throw Error("BUILD ERROR: RECAPTCHA PUBLIC KEY NOT SETTED");
}

export default function ChangePasswordFirstStep({
   newPassword,
   currentPassword,
   userEmail,
   errors,
   register,
   handleSubmit,
   nextStep,
}: Interface) {
   const { t, style, isLoading, submit } = useChangePasswordFirstStep({
      userEmail,
      nextStep,
   });

   return (
      <Form
         handleSubmit={handleSubmit!}
         onSubmit={submit}
         className="profileFormDiv"
      >
         <ChangePassword text={t("changePassword.title")} />
         <Wrapper className="3xl:w-1/2 max-w-80">
            <div className="flex flex-col justify-center items-center gap-y-10 w-full">
               <div className="changePasswordInputDivs">
                  <p className="profileDataLabel">
                     {t("changePassword.current")}
                  </p>
                  <Password
                     placeholder={t("changePassword.placeholders.current")}
                     errorMessage={t("changePassword.currentErrorMessage")}
                     password={currentPassword}
                     type={currentPasswordType}
                     style={style}
                     register={register}
                  />
               </div>
               <div className="changePasswordInputDivs gap-y-4!">
                  <div className="changePasswordInputDivs">
                     <p className="profileDataLabel">
                        {t("changePassword.new")}
                     </p>
                     <Password
                        placeholder={t("changePassword.placeholders.new")}
                        password={newPassword}
                        type={newPasswordType}
                        style={style}
                        register={register}
                     />
                  </div>
                  <Password
                     placeholder={t("changePassword.placeholders.confirm")}
                     password={newPassword}
                     register={register}
                     type={passwordConfirmation}
                     style={style}
                  />
               </div>
            </div>
         </Wrapper>
         <ReCaptcha>
            <Register
               isLoading={isLoading}
               buttonLabel={t("changePassword.button")}
               isFormWithErrors={
                  errors?.newPassword?.message !== undefined ||
                  errors?.currentPassword?.message !== undefined ||
                  errors?.confirmPassword?.message !== undefined
               }
               styles=" w-4/12! lg:w-3/12! max-w-50"
            />
         </ReCaptcha>
      </Form>
   );
}
