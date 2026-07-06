import AuthPage from "../wrappers/AuthPage";
import ChangePasswordForm from "@/components/forms/changePasswordForm/ChangePasswordForm";

export default async function ChangePassword() {
   return (
      <AuthPage>
         <ChangePasswordForm />
      </AuthPage>
   );
}
