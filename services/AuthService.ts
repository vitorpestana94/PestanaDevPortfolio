import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import ApiToken from "@/models/interfaces/dtos/ApiToken";
import LoginOrSignUpWithPlatform from "@/models/interfaces/dtos/requests/LoginOrSignUpWithPlatformRequest";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import IsEmailRegisteredResponseDto from "@/models/interfaces/dtos/responses/IsEmailRegisteredResponseDto";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import RefreshTokenRequest from "@/models/interfaces/dtos/requests/RefreshTokenRequest";

export default class AuthService {
   static async login(request: LoginRequest): Promise<ApiToken> {
      return await apiRequest(builder.LoginRequest(request));
   }

   static async loginOrSignUpWithPlatform(
      request: LoginOrSignUpWithPlatform,
   ): Promise<ApiToken> {
      return await apiRequest(builder.LoginWithPlatformRequest(request));
   }

   static async ForgotPassword(request: ForgotPasswordRequest): Promise<void> {
      return await apiRequest(builder.ForgotPassword(request));
   }

   static async isEmailRegistered(
      email?: string,
   ): Promise<IsEmailRegisteredResponseDto> {
      return await apiRequest(builder.IsEmailRegistered(email));
   }

   static async signup(requestBody: SignUpRequest): Promise<ApiToken> {
      return await apiRequest(builder.SignUp(requestBody));
   }

   static async refreshToken(
      requestBody: RefreshTokenRequest,
   ): Promise<ApiToken> {
      return await apiRequest(builder.RefreshToken(requestBody));
   }

   static async LogouUser(): Promise<void> {
      return await apiRequest(builder.DeleteUser());
   }
}
