import { signIn } from "next-auth/react";
import { Platform } from "@/models/enums/Platform";
import { getPlatformAsString } from "../strings/getPlatform";

export const handleSign = async (platform: Platform, redirectTo: string) =>
  await signIn(getPlatformAsString(platform).toLowerCase(), {
    callbackUrl: `/${redirectTo}`,
  });
