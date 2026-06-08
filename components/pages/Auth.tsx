import SignInOrUp from "@/components/sections/Auth/AuthSection";
import Main from "../mains/DevidedMain";
import redirectIfAuthenticated from "@/utils/authentication/redirectIfAuthenticated";

export default async function AuthPage() {
   await redirectIfAuthenticated();

   return (
      <Main>
         <SignInOrUp />
      </Main>
   );
}
