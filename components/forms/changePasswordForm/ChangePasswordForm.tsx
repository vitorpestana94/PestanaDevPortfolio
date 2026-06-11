import AuthForm from "../DevidedDivFormWrapper";
import User from "@/models/interfaces/UI/UserInterface";
import FormSteps from "@/components/formsSteps/changePasswordForm/ChangePasswordFormSteps";

export default function ChangePasswordForm({ user }: User) {
   return (
      <AuthForm>
         <FormSteps user={user} />
      </AuthForm>
   );
}
