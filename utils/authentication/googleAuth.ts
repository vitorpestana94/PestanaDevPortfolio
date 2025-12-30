import { signIn, signOut } from "next-auth/react";

export const handleGoogleSignIn = async (redirectTo: string, locale: string) =>
  await signIn("google", { callbackUrl: `/${locale}/${redirectTo}` });
export const handleGoogleSignOut = () => signOut({ redirect: false });
