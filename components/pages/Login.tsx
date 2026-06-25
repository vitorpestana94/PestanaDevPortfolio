import LoginForm from "@/components/forms/loginForm/LoginForm";
import AuthPage from "./AuthPage";

export default async function LoginPage() {
   return (
      <AuthPage>
         <LoginForm />
      </AuthPage>
   );
}
