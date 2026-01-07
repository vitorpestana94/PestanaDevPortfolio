import { Platform } from "@/models/enums/Platform";

export default interface LoginOrSignUpWithPlatformRequest {
  platform?: Platform;
  deviceId?: string;
  token?: string;
}
