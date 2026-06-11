import useEditProfileFirstStep from "./useEditProfileFirstStep";
import Interface from "./EditProfileFirstStepInterface";
import User from "@/models/interfaces/UI/UserInterface";
import Input from "@/components/inputs/editProfileInput/EditProfileInput";
import EditButton from "@/components/buttons/formButton/FormButton";
import ChangeData from "@/components/paragraphs/FormParagraph";

export default function EditProfileFirstStep({
   request,
   user,
   isLoadingUpdateRequest,
   submit,
   nextStep,
   setEmail,
   setName,
}: Interface & User & { isLoadingUpdateRequest: boolean }) {
   const { t, isLoading, dataNotChanged, submitUpdate } =
      useEditProfileFirstStep({
         request,
         submit,
         nextStep,
         setEmail,
         setName,
      });

   return (
      <div className="profileFormDiv">
         <ChangeData text={t("editProfile.edit.title")} />
         <Input
            label={t("editProfile.edit.name")}
            autoCompleteType="name"
            props={{
               placeHolder: user.name,
               type: "text",
               name: "name",
               setFormData: setName,
            }}
         />
         <Input
            label="Email"
            autoCompleteType="email"
            props={{
               placeHolder: user.email,
               type: "email",
               name: "email",
               setFormData: setEmail,
            }}
         />
         <EditButton
            submit={submitUpdate}
            isLoading={isLoading || isLoadingUpdateRequest}
            isFormWithErrors={dataNotChanged}
            buttonLabel={t("editProfile.edit.button")}
            styles={"mt-8"}
         />
      </div>
   );
}
