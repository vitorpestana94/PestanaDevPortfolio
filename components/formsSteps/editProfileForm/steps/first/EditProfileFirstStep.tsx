import useEditProfileFirstStep from "./useEditProfileFirstStep";
import Interface from "./EditProfileFirstStepInterface";
import Input from "@/components/inputs/editProfileInput/EditProfileInput";
import User from "@/models/interfaces/dtos/SystemUser";
import EditButton from "@/components/buttons/formButton/FormButton";
import ChangeData from "@/components/paragraphs/FormParagraph";
import Form from "@/components/forms/DefaultForm/DefaultForm";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";

export default function EditProfileFirstStep({
   user,
   isSignUpWithPlatform,
   isLoadingUpdateRequest,
   name,
   email,
   isEmailUpdate,
   submit,
   register,
   handleSubmit,
   nextStep,
}: Interface & { user: User } & {
   isLoadingUpdateRequest: boolean;
   isSignUpWithPlatform: boolean;
}) {
   const { t, isLoading, dataNotChanged, submitUpdate, updateNameOnly } =
      useEditProfileFirstStep({ email, name, isEmailUpdate, submit, nextStep });

   return (
      <Form
         handleSubmit={handleSubmit!}
         onSubmit={async (data: ChangeUserDataRequestDto) => {
            !isEmailUpdate ? updateNameOnly(data) : null;
         }}
         className="profileFormDiv"
      >
         <ChangeData text={t("editProfile.edit.title")} />
         <div className="flex flex-col justify-center items-center gap-y-4 w-full">
            <Input
               register={register}
               type="name"
               label={t("editProfile.edit.name")}
               autoCompleteType="name"
               props={{
                  placeHolder: user.name!,
                  type: "text",
               }}
            />
            {!isSignUpWithPlatform && (
               <Input
                  register={register}
                  type="email"
                  label="Email"
                  autoCompleteType="email"
                  props={{
                     placeHolder: user.email!,
                     type: "email",
                  }}
               />
            )}
         </div>
         <EditButton
            submit={submitUpdate}
            isLoading={isLoading || isLoadingUpdateRequest}
            isFormWithErrors={dataNotChanged}
            buttonLabel={t("editProfile.edit.button")}
            styles={"mt-8"}
         />
      </Form>
   );
}
