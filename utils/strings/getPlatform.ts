import { Platform } from "@/models/enums/Platform";

const platformObj = {
  google: Platform.Google,
  github: Platform.Github,
} as const;

const platformAsString = {
  0: "google",
  1: "github",
};

export function getPlatform(platform: string) {
  const key = platform.toLowerCase() as keyof typeof platformObj;

  if (!(key in platformObj)) {
    throw new Error("Invalid platform");
  }

  return platformObj[key];
}

export function getPlatformAsString(platform: Platform) {
  return platformAsString[platform];
}
