import { Platform } from "@/models/enums/Platform";

const platformObj = {
  google: Platform.Google,
  apple: Platform.Apple,
} as const;

export function getPlatform(platform: string) {
  const key = platform.toLowerCase() as keyof typeof platformObj;

  if (!(key in platformObj)) {
    throw new Error("Invalid platform");
  }

  return platformObj[key];
}
