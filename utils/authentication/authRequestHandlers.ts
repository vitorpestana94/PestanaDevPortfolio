import AuthService from "@/services/AuthService";
import { jwtDecode, JwtPayload } from "jwt-decode";
import ApiToken from "@/models/interfaces/dtos/ApiToken";
import { getPlatform } from "../strings/getPlatform";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import getDeviceId from "../strings/getDeviceId";
import getErrorMessage from "../strings/getErrorMessage";

export async function login(
   email: string,
   password: string,
   captchaToken: string,
) {
   const deviceId = getDeviceId();

   const response: ApiToken | null = await AuthService.login({
      email,
      password,
      deviceId: deviceId,
      captchaToken: captchaToken,
   });

   checkResponse(response);

   return await handleLoginResponse(response, deviceId);
}

export async function signup(request: SignUpRequest) {
   request.deviceId = getDeviceId();

   const response = await AuthService.signup(request);

   checkResponse(response);

   return await handleLoginResponse(response, request.deviceId);
}

export async function loginOrSignUpWithPlatform(
   token: string,
   authPlatform: string,
) {
   const deviceId = crypto.randomUUID();

   const response = await AuthService.loginOrSignUpWithPlatform({
      token,
      deviceId: deviceId,
      platform: getPlatform(authPlatform),
   });

   checkResponse(response);

   return await handleLoginResponse(response, deviceId);
}

async function handleLoginResponse(
   response: ApiToken | null,
   deviceId: string,
) {
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

// export async function refreshAccessToken(
//    id: string,
//    token: string,
//    deviceId: string,
//    oldToken: JWT,
// ) {
//    const response = await userService.refreshToken(
//       builder.createRefresToken(id, token, deviceId),
//    );
//    const decoded: JwtPayload = jwtDecode(response.token);
//    const userId: string = decoded.sub ?? "";

//    const user: User = await userService.getUserServerSide(
//       userId,
//       response.token,
//    );

//    return {
//       ...oldToken,
//       token: response.token,
//       refreshToken: response.refreshToken,
//       id: userId,
//       role: decoded.role,
//       expirationTime: decoded.exp,
//       deviceId: deviceId,
//       image: user.picture,
//       email: user.email,
//       name: user.name,
//    };
// }

function checkResponse(response: ApiToken | null) {
   if (!response || response.message != "Ok") {
      throw new Error(getErrorMessage(response?.message ?? ""));
   }
}
