import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import builder from "./request/RequestDtoBuilder";
import ApiToken from "@/models/interfaces/dtos/ApiToken";
import LoginOrSignUpWithPlatform from "@/models/interfaces/dtos/requests/LoginOrSignUpWithPlatformRequest";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import RefreshTokenRequest from "@/models/interfaces/dtos/requests/RefreshTokenRequest";
import { nextAuthRequest } from "@/lib/api/nextAuthRequest";

export default class AuthServiceServer {
   static async login(request: LoginRequest): Promise<ApiToken> {
        const req = builder.LoginRequest(request);

        const response = await nextAuthRequest.post<ApiToken>(req.path, req.requestBody);
        
        return response.data;
    }

   static async loginOrSignUpWithPlatform(request: LoginOrSignUpWithPlatform): Promise<ApiToken> {
        const req = builder.LoginWithPlatformRequest(request);

        const response = await nextAuthRequest.post<ApiToken>(req.path, req.requestBody)

        return response.data;
    }

   static async signup(requestBody: SignUpRequest): Promise<ApiToken> {
        const req = builder.SignUp(requestBody);

        const response = await nextAuthRequest.post<ApiToken>(req.path, req.requestBody)
    
        return response.data;
    }

   static async refreshToken(requestBody: RefreshTokenRequest): Promise<ApiToken> {
        const req = builder.RefreshToken(requestBody);

        const response = await nextAuthRequest.post<ApiToken>(req.path, req.requestBody)

        return response.data;
    }
}
