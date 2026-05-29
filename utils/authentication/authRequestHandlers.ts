import LoginService from "@/services/LoginService";
import PlatformService from "@/services/PlatformService";
import { jwtDecode, JwtPayload } from "jwt-decode";
import ApiToken from "@/models/interfaces/dtos/responses/ApiToken";
import { getPlatform } from "../strings/getPlatform";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import SignUpService from "@/services/SignUpService";
import getDeviceId from "../strings/getDeviceId";

export async function login(email: string, password: string) {
   const deviceId = getDeviceId();

   let response: ApiToken | null = null;

   try {
      response = await LoginService.login({
         email,
         password,
         deviceId: deviceId,
      });
   } catch (error: any) {
      return null;
   }

   return await handleLoginResponse(response, deviceId);
}

export async function signup(request: SignUpRequest) {
   let response: ApiToken | null = null;

   request.deviceId = getDeviceId();

   try {
      response = await SignUpService.signup(request);
   } catch (error: any) {
      return null;
   }

   return await handleLoginResponse(response, request.deviceId);
}

export async function loginOrSignUpWithPlatform(
   token: string,
   authPlatform: string,
) {
   const deviceId = crypto.randomUUID();
   let response: ApiToken | null = null;

   try {
      response = await PlatformService.loginOrSignUpWithPlatform({
         token,
         deviceId: deviceId,
         platform: getPlatform(authPlatform),
      });
   } catch (error: any) {
      return null;
   }

   return await handleLoginResponse(response, deviceId);
}

async function handleLoginResponse(response: ApiToken, deviceId: string) {
   if (response && response.token) {
      const decoded: JwtPayload = await jwtDecode(response.token);
      const userId: string = decoded.sub ?? "";

      return {
         id: userId,
         expirationTime: decoded?.exp,
         token: response.token,
         refreshToken: response.refreshToken,
         email: decoded.email,
         name: decoded.name,
         deviceId: deviceId,
         loginFailed: false,
      };
   } else {
      return null;
   }
}
