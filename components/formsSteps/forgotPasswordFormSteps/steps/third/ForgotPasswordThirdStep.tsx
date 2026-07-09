import Interface from "./ForgotPasswordThidStepInterface";
import useForgotPasswordThirdStep from "./useForgotPasswordThirdStep";
import Password from "@/components/inputs/PasswordInput/PasswordInput";
import Register from "@/components/buttons/formButton/FormButton";
import NowSetNewPassword from "@/components/paragraphs/FormParagraph";
import Form from "@/components/forms/DefaultForm/DefaultForm";
import {
   newPassword,
   passwordConfirmation,
} from "@/components/inputs/PasswordInput/PasswordInputInterface";

export default function ForgotPasswordThirdStep({
   isLoading,
   password,
   errors,
   register,
   handleSubmit,
   submitForm,
}: Interface) {
   const { t } = useForgotPasswordThirdStep();

   return (
      <Form
         handleSubmit={handleSubmit!}
         onSubmit={submitForm}
         className="flex flex-col flex-1 justify-around sm:items-center w-full"
      >
         <NowSetNewPassword text={t("title")} />
         <div className="flex flex-col w-[50%] gap-y-4 self-center">
            <Password
               type={newPassword}
               errors={errors}
               password={password}
               register={register}
            />
            <Password
               type={passwordConfirmation}
               errors={errors}
               password={password}
               register={register}
            />
         </div>
         <Register
            isLoading={isLoading}
            buttonLabel={t("button")}
            isFormWithErrors={
               errors?.password !== undefined ||
               errors?.newPassword !== undefined ||
               errors?.cunrretPassword !== undefined
            }
         />
      </Form>
   );
}
