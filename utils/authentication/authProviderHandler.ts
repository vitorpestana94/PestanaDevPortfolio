import { signIn, signOut } from "next-auth/react";
import { Platform } from "@/models/enums/Platform";
import { getPlatformAsString } from "../strings/getPlatform";

export const handleSignOut = () => signOut({ redirect: false });

export const handleSign = async (platform: Platform, redirectTo: string) =>
  await signIn(getPlatformAsString(platform).toLowerCase(), {
    callbackUrl: `/${redirectTo}`,
  });
