import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import ApiToken from "@/models/interfaces/dtos/ApiToken";
import LoginOrSignUpWithPlatform from "@/models/interfaces/dtos/requests/LoginOrSignUpWithPlatformRequest";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import IsEmailRegisteredResponseDto from "@/models/interfaces/dtos/responses/IsEmailRegisteredResponseDto";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";

export default class AuthService {
   static async login(request: LoginRequest): Promise<ApiToken> {
      return await QueryHandler(apiRequest(builder.LoginRequest(request)));
   }

   static async loginOrSignUpWithPlatform(
      request: LoginOrSignUpWithPlatform,
   ): Promise<ApiToken> {
      return await QueryHandler(
         apiRequest(builder.LoginWithPlatformRequest(request)),
      );
   }

   static async ForgotPassword(request: ForgotPasswordRequest): Promise<void> {
      return await QueryHandler(apiRequest(builder.ForgotPassword(request)));
   }

   static async isEmailRegistered(
      email?: string,
   ): Promise<IsEmailRegisteredResponseDto> {
      return await QueryHandler(apiRequest(builder.IsEmailRegistered(email)));
   }

   static async signup(requestBody: SignUpRequest): Promise<ApiToken> {
      return await QueryHandler(apiRequest(builder.SignUp(requestBody)));
   }
}
