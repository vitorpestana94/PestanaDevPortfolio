import SignUpThirdStepInterface from "./SignUpThirdStepInterface";
import useSignUpThirdStep from "./useSignUpThirdStep";
import Name from "@/components/inputs/NameInput/NameInput";
import Password from "@/components/inputs/PasswordInput/PasswordInput";
import Register from "@/components/buttons/formButton/FormButton";
import NowPleaseProvideNameAndPassword from "@/components/paragraphs/FormParagraph";
import Form from "@/components/forms/DefaultForm/DefaultForm";
import TermsAcception from "@/components/labels/TermsAcceptionLabel";
import {
   password as passwordType,
   passwordConfirmation,
} from "@/components/inputs/PasswordInput/PasswordInputInterface";
import BaitInput from "@/components/inputs/BaitInput";

export default function SignUpThirdStep({
   isLoading,
   password,
   accepted,
   errors,
   register,
   handleSubmit,
   submitForm,
}: SignUpThirdStepInterface) {
   const { t } = useSignUpThirdStep();

   return (
      <Form
         handleSubmit={handleSubmit!}
         onSubmit={submitForm}
         className="flex flex-col flex-1 justify-around sm:items-center w-full"
      >
         <NowPleaseProvideNameAndPassword text={t("paragraph")} />
         <div className="flex flex-col w-[50%] gap-y-4 self-center">
            <BaitInput />
            <Name errors={errors} register={register} />
            <Password
               type={passwordType}
               password={password}
               errors={errors}
               register={register}
            />
            <Password
               type={passwordConfirmation}
               password={password}
               errors={errors}
               register={register}
            />
         </div>
         <TermsAcception
            accepted={accepted}
            errors={errors}
            register={register}
         />
         <Register
            isLoading={isLoading}
            buttonLabel={t("buttonLabel")}
            isFormWithErrors={
               errors?.passwordConfirmation !== undefined ||
               errors?.password !== undefined ||
               errors?.name !== undefined
            }
            styles=" w-4/12! lg:w-3/12!"
         />
      </Form>
   );
}
