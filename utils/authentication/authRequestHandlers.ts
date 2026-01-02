import LoginService from "@/services/LoginService";
import { jwtDecode, JwtPayload } from "jwt-decode";
import ApiToken from "@/models/interfaces/dtos/responses/ApiToken";
import { getPlatform } from "../strings/getPlatform";

export async function login(email: string, password: string) {
  const deviceId = crypto.randomUUID();

  let response: ApiToken | null = null;

  try {
    response = await LoginService.login({
      email,
      password,
      deviceId: crypto.randomUUID(),
    });
  } catch (error: any) {
    return null;
  }

  return await handleLoginResponse(response, deviceId);
}

export async function loginWithPlatform(token: string, authPlatform: string) {
  const deviceId = crypto.randomUUID();
  let response: ApiToken | null = null;

  try {
    response = await LoginService.loginWithPlatform({
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
      image: decoded.picture,
      email: decoded.email,
      name: decoded.name,
      deviceId: deviceId,
      loginFailed: false,
    };
  } else {
    return null;
  }
}
