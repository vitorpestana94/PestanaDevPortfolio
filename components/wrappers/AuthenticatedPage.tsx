import ensureAuthenticated from "@/utils/authentication/ensureAuthenticated";
import Main from "../mains/DevidedMain";
import { ReactNode } from "react";

export default async function AuthenticatedPage({
   children,
}: {
   children: ReactNode;
}) {
   await ensureAuthenticated();

   return <Main>{children}</Main>;
}
