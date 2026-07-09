import { getSession } from "./authHandlers";
import { redirect } from "next/navigation";

export default async function redirectIfAuthenticated() {
   const session = await getSession();

   if (session) {
      redirect("/");
   }
}
