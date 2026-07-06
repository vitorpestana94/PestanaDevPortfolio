import LoginForm from "@/components/forms/loginForm/LoginForm";
import AuthPage from "../wrappers/AuthPage";

export default async function LoginPage() {
   return (
      <AuthPage>
         <LoginForm />
      </AuthPage>
   );
}
