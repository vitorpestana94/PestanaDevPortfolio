import { getSession } from "./authHandlers";
import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import { Session } from "next-auth";

export default async function ensureAuthenticated(): Promise<Session> {
   const session = await getSession();
   const locale = await getLocale();

   if (!session) {
      redirect(`/${locale}/authentication`);
   }

   return session!;
}
