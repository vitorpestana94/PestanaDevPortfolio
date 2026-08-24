import { getSession } from "./authHandlers";
import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import { Session } from "next-auth";

export default async function ensureAuthenticated(redirectTo: string): Promise<Session> {
   const session = await getSession();
   const locale = await getLocale();

   if (!session) {
      redirect(`/${locale}/authentication/login?redirectTo=${redirectTo}`);
   }

   return session!;
}
