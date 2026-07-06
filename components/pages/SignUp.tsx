import SignUpForm from "../forms/SignUpForm";
import AuthPage from "../wrappers/AuthPage";

export default async function SignUpPage() {
   return (
      <AuthPage>
         <SignUpForm />
      </AuthPage>
   );
}
