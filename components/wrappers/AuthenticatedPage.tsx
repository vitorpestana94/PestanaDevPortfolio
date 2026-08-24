import ensureAuthenticated from "@/utils/authentication/ensureAuthenticated";
import Main from "../mains/DevidedMain";
import { ReactNode } from "react";

export default async function AuthenticatedPage({
   children,
   redirectTo
}: {
   children: ReactNode;
   redirectTo: string;
}) {
   await ensureAuthenticated(redirectTo);

   return <Main>{children}</Main>;
}
