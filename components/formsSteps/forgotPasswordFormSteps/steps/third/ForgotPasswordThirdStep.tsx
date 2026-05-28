import Interface from "./ForgotPasswordThidStepInterface";
import useForgotPasswordThirdStep from "./useForgotPasswordThirdStep";
import Password from "@/components/inputs/PasswordInput/PasswordInput";
import Register from "@/components/buttons/authButton/AuthButton";
import NowSetNewPassword from "@/components/paragraphs/SignUpFormParagraph";

export default function ForgotPasswordThirdStep({
   isLoading,
   password,
   submitForm,
   nextStep,
   setPassword,
}: Interface) {
   const { t, isFormError, setIsFormError } = useForgotPasswordThirdStep();

   return (
      <section className="flex flex-col flex-1 justify-around sm:items-center w-full">
         <NowSetNewPassword text={t("title")} />
         <div className="flex flex-col w-[50%] gap-y-4 self-center">
            <Password
               password={password}
               setPassword={setPassword}
               setIsFormError={setIsFormError}
            />
            <Password
               isPasswordConfirmation
               password={password}
               setPassword={setPassword}
               setIsFormError={setIsFormError}
            />
         </div>
         <Register
            isLoading={isLoading}
            buttonLabel={t("button")}
            isFormWithErrors={
               isFormError.passwordConfirmationError ||
               isFormError.passwordError
            }
            submit={submitForm}
         />
      </section>
   );
}
