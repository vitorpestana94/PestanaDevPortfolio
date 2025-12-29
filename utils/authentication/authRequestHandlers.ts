import { JWT } from "next-auth/jwt";
import LoginService from "@/services/LoginService";
import { jwtDecode, JwtPayload } from "jwt-decode";
import ApiToken from "@/models/interfaces/dtos/responses/ApiToken";

// export async function refreshAccessToken(id: string, token: string, deviceId: string, oldToken: JWT) {
//     const response = await userService.refreshToken(builder.createRefresToken(id, token, deviceId));
//     const decoded: JwtPayload = jwtDecode(response.token);
//     const userId: string = decoded.sub ?? "";

//     const user: User = await userService.getUserServerSide(userId, response.token);

//     return {
//         ...oldToken,
//         token: response.token,
//         refreshToken: response.refreshToken,
//         id: userId,
//         role: decoded.role,
//         expirationTime: decoded.exp,
//         deviceId: deviceId,
//         image: user.picture,
//         email: user.email,
//         name: user.name
//     };
// };

// export async function loginWithProvider(idToken: string, provider: string, token: JWT) {
//     const deviceId = crypto.randomUUID();
//     let response = null;

//     try {
//         response = await userService.loginWithPlatform(builder.createLoginWithPlatform(idToken, deviceId), provider);
//     } catch (error) {
//         return {
//             ...token,
//             loginWithProviderFailed: true
//         }
//     }

//     if (typeof response === "string") {
//         return {
//             ...token,
//             userNotRegistered: true
//         }
//     }

//     if (typeof response === "object") {
//         if (isTokenResponse(response)) {
//             const decoded = jwtDecode(response.token);
//             const userId: string = decoded.sub ?? "";

//             const user: User = await userService.getUserServerSide(userId, response.token);

//             return {
//                 ...token,
//                 token: response.token,
//                 refreshToken: response.refreshToken,
//                 id: userId,
//                 role: decoded.role,
//                 expirationTime: decoded.exp,
//                 deviceId: deviceId,
//                 loginWithProviderFailed: false,
//                 image: user.picture,
//                 email: user.email,
//                 name: user.name
//             }
//         } else if (isAuthProviderResponse(response)) {
//             return {
//                 ...token,
//                 name: response.name,
//                 picture: response.picture,
//                 idToken: response.idToken,
//                 userNotRegistered: true
//             }
//         }
//     }

//     return {
//         ...token,
//     }
// };

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

// export async function loginWithPlatform(idToken: string, provider: string) {
//   const deviceId = crypto.randomUUID();
//   let platformToken: string = idToken;

//   if (platformToken === "id_token") {
//     platformToken = await ProxyTokenService.requestGetProviderToken();
//   }

//   let response: TokensResponse | AuthProviderResponse | string | null = null;

//   try {
//     response = await userService.loginWithPlatform(
//       builder.createLoginWithPlatform(platformToken, deviceId),
//       provider
//     );
//   } catch (error: any) {
//     return {
//       id: "error",
//     };
//   }

//   if (isTokenResponse(response)) {
//     const decoded: JwtPayload = await jwtDecode(response.token);
//     const userId: string = decoded.sub ?? "";
//     const user: User = await userService.getUserServerSide(
//       userId,
//       response.token
//     );

//     return {
//       id: userId,
//       role: decoded.role,
//       expirationTime: decoded?.exp,
//       token: response.token,
//       refreshToken: response.refreshToken,
//       deviceId: deviceId,
//       loginFailed: false,
//       image: ProxySanitizatorService.replaceApiUrlFromImgsValue(user.picture),
//       email: user.email,
//       name: user.name,
//     };
//   } else if (isAuthProviderResponse(response)) {
//     return {
//       id: "",
//       name: response.name,
//       picture: response.picture,
//       idToken: response.idToken,
//     };
//   } else {
//     return null;
//   }
// }
