import useEditProfileFirstStep from "./useEditProfileFirstStep";
import Interface from "./EditProfileFirstStepInterface";
import User from "@/models/interfaces/UI/UserInterface";
import Input from "@/components/inputs/editProfileInput/EditProfileInput";
import EditButton from "@/components/buttons/authButton/AuthButton";

export default function EditProfileFirstStep({
   user,
   setIsUpdateEmail,
   nextStep,
}: Interface & User) {
   const { dataNotChanged, isLoading, setEmail, setName, submit } =
      useEditProfileFirstStep({ nextStep, setIsUpdateEmail });

   return (
      <div className="flex flex-col flex-1 gap-y-8 justify-center items-center w-full">
         <Input
            label="Name"
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
            submit={submit}
            isLoading={isLoading}
            isFormWithErrors={dataNotChanged === null ? false : dataNotChanged}
            buttonLabel={"teste"}
         />
      </div>
   );
}
