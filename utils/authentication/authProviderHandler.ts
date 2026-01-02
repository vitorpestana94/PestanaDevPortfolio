import { signIn, signOut } from "next-auth/react";
import { Platform } from "@/models/enums/Platform";
import { getPlatformAsString } from "../strings/getPlatform";

export const handleGoogleSignIn = async (redirectTo: string, locale: string) =>
  await signIn("google", { callbackUrl: `/${locale}/${redirectTo}` });
export const handleSignOut = () => signOut({ redirect: false });

export const handleSign = async (
  platform: Platform,
  redirectTo: string,
  locale: string
) =>
  await signIn(getPlatformAsString(platform).toLowerCase(), {
    callbackUrl: `/${locale}/${redirectTo}`,
  });
