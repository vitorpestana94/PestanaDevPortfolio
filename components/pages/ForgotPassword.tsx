import AuthPage from "./AuthPage";
import ForgotPasswordForm from "@/components/forms/forgotPasswordForm/ForgotPasswordForm";

export default async function ForgotPasswordPage() {
   return (
      <AuthPage>
         <ForgotPasswordForm />
      </AuthPage>
   );
}
