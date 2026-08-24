import AuthenticatedPage from "../wrappers/AuthenticatedPage";
import ChangePasswordForm from "@/components/forms/changePasswordForm/ChangePasswordForm";

export default async function ChangePassword() {
   return (
      <AuthenticatedPage redirectTo="profile/change-password">
         <ChangePasswordForm />
      </AuthenticatedPage>
   );
}
