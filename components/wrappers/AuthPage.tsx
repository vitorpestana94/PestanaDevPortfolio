import redirectIfAuthenticated from "@/utils/authentication/redirectIfAuthenticated";
import Main from "../mains/DevidedMain";
import { ReactNode } from "react";

export default async function AuthPage({ children }: { children: ReactNode }) {
   await redirectIfAuthenticated();

   return <Main>{children}</Main>;
}
