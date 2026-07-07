import FormSteps from "@/components/formsSteps/changePasswordForm/ChangePasswordFormSteps";
import AuthenticatedPage from "@/components/wrappers/AuthenticatedPage";

export default function ChangePasswordForm() {
   return (
      <AuthenticatedPage>
         <FormSteps />
      </AuthenticatedPage>
   );
}
