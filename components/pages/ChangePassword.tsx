import AuthenticatedPage from "../wrappers/AuthenticatedPage";
import ChangePasswordForm from "@/components/forms/changePasswordForm/ChangePasswordForm";

export default async function ChangePassword() {
   return (
      <AuthenticatedPage>
         <ChangePasswordForm />
      </AuthenticatedPage>
   );
}
