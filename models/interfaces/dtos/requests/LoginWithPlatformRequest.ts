import { Platform } from "@/models/enums/Platform";

export default interface LoginWithPlatformRequest {
  platform: Platform;
  deviceId: string;
  token: string;
}
