import { jwtDecode, JwtPayload } from "jwt-decode";
import ApiToken from "@/models/interfaces/dtos/ApiToken";
import { JWT } from "next-auth/jwt";
import { getPlatform } from "../strings/getPlatform";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import RefreshTokenRequest from "@/models/interfaces/dtos/requests/RefreshTokenRequest";
import AuthServiceServer from "@/services/AuthServiceServer";

export async function login(
   email: string,
   password: string,
   captchaToken: string,
) {
   const response: ApiToken | null = await AuthServiceServer.login({
      email,
      password,
      captchaToken: captchaToken,
   });

   checkResponse(response);

   return await handleLoginResponse(response);
}

export async function signup(request: SignUpRequest) {
   const response: ApiToken | null = await AuthServiceServer.signup(request);

   checkResponse(response);

   return await handleLoginResponse(response);
}

export async function loginOrSignUpWithPlatform(
   token: string,
   authPlatform: string,
) {
   const response: ApiToken | null =
      await AuthServiceServer.loginOrSignUpWithPlatform({
         token,
         platform: getPlatform(authPlatform),
      });

   checkResponse(response);

   return await handleLoginResponse(response);
}

async function handleLoginResponse(response: ApiToken | null) {
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
         deviceId: decoded.sid,
      };
   } else {
      return null;
   }
}

export async function refreshAccessToken(
   request: RefreshTokenRequest,
   oldToken: JWT,
) {
   const response = await AuthServiceServer.refreshToken(request);

   checkResponse(response);

   const decoded: JwtPayload = jwtDecode(response.token!);

   return {
      ...oldToken,
      token: response.token,
      refreshToken: response.refreshToken,
      id: decoded.sub,
      expirationTime: decoded.exp,
      deviceId: decoded.sid,
      email: decoded.email,
      name: decoded.name,
   };
}

function checkResponse(response: ApiToken | null) {
   if (!response) {
      throw Error("500");
   }
}
