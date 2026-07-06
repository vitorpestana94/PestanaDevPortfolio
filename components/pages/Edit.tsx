import EditProfileForm from "@/components/forms/editProfileForm/EditProfileForm";
import AuthenticatedPage from "../wrappers/AuthenticatedPage";

export default function EditPage() {
   return (
      <AuthenticatedPage>
         <EditProfileForm />
      </AuthenticatedPage>
   );
}
