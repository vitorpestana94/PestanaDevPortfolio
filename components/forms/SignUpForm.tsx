import AuthForm from "./DevidedDivFormWrapper";
import FormSteps from "../formsSteps/signUpFormSteps/SignUpFormSteps";

export default function SignUpForm() {
   return (
      <AuthForm className="xxs:min-h-81 xs:min-h-0">
         <FormSteps />
      </AuthForm>
   );
}
