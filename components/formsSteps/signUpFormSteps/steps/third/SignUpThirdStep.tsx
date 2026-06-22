import SignUpThirdStepInterface from "./SignUpThirdStepInterface";
import useSignUpThirdStep from "./useSignUpThirdStep";
import Name from "@/components/inputs/NameInput/NameInput";
import Password from "@/components/inputs/PasswordInput/PasswordInput";
import Register from "@/components/buttons/formButton/FormButton";
import NowPleaseProvideNameAndPassword from "@/components/paragraphs/FormParagraph";

export default function SignUpThirdStep({
   isLoading,
   password,
   setName,
   setPassword,
   submitForm,
}: SignUpThirdStepInterface) {
   const { t, isFormError, setIsFormError } = useSignUpThirdStep();

   return (
      <section className="flex flex-col flex-1 justify-around sm:items-center w-full">
         <NowPleaseProvideNameAndPassword text={t("paragraph")} />
         <div className="flex flex-col w-[50%] gap-y-4 self-center">
            <Name
               setName={setName}
               placeholder={t("placeholders.name")}
               setIsFormError={setIsFormError}
            />
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
            buttonLabel={t("buttonLabel")}
            isFormWithErrors={
               isFormError.nameError ||
               isFormError.passwordConfirmationError ||
               isFormError.passwordError
            }
            styles=" w-4/12! lg:w-3/12!"
            submit={submitForm}
         />
      </section>
   );
}
