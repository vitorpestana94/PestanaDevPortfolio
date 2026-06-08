import AuthForm from "../DevidedDivFormWrapper";
import FormSteps from "../../formsSteps/forgotPasswordFormSteps/ForgotPasswordFormSteps";
import Interface from "./ForgotPasswordFormInterface";

export default function ForgotPasswordForm({ switchBackToLogin }: Interface) {
   return (
      <AuthForm>
         <FormSteps switchBackToLogin={switchBackToLogin} />
      </AuthForm>
   );
}
