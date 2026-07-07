import useEditProfileFirstStep from "./useEditProfileFirstStep";
import Interface from "./EditProfileFirstStepInterface";
import User from "@/models/interfaces/UI/UserInterface";
import Input from "@/components/inputs/editProfileInput/EditProfileInput";
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
}: Interface &
   User & { isLoadingUpdateRequest: boolean; isSignUpWithPlatform: boolean }) {
   const { t, isLoading, dataNotChanged, submitUpdate } =
      useEditProfileFirstStep({ email, name, isEmailUpdate, submit, nextStep });

   return (
      <Form
         handleSubmit={handleSubmit!}
         onSubmit={(data: ChangeUserDataRequestDto) => {
            !isEmailUpdate ? submit(data) : null;
         }}
         className="profileFormDiv"
      >
         <ChangeData text={t("editProfile.edit.title")} />
         <Input
            register={register}
            type="name"
            label={t("editProfile.edit.name")}
            autoCompleteType="name"
            props={{
               placeHolder: user.name,
               type: "text",
               name: "name",
            }}
         />
         {!isSignUpWithPlatform && (
            <Input
               register={register}
               type="email"
               label="Email"
               autoCompleteType="email"
               props={{
                  placeHolder: user.email,
                  type: "email",
                  name: "email",
               }}
            />
         )}
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
