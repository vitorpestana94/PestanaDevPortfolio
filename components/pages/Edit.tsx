import EditProfileForm from "@/components/forms/editProfileForm/EditProfileForm";
import AuthPage from "../wrappers/AuthPage";

export default function EditPage() {
   return (
      <AuthPage>
         <EditProfileForm />
      </AuthPage>
   );
}
