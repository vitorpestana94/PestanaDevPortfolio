import { getSession } from "./authHandlers";
import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import { Session } from "next-auth";

function redirectToPath(locale: string, redirectTo?: string) {
  let url = `/${locale}/sign-in/`;

  if (redirectTo) {
    url = url.concat(`?redirectTo=${redirectTo}`);
  }

  redirect(url);
}

export default async function ensureAuthenticated(
  redirectTo?: string
): Promise<Session> {
  const session = await getSession();
  const locale = await getLocale();

  if (!session) {
    redirectToPath(locale, redirectTo);
  }

  return session!;
}
