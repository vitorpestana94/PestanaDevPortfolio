import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import LoginOrSignUpWithPlatformRequest from "@/models/interfaces/dtos/requests/LoginOrSignUpWithPlatformRequest";
import SendConfirmationCodeRequest from "@/models/interfaces/dtos/requests/SendConfirmationCodeRequest";
import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import CheckConfirmationCodeRequest from "@/models/interfaces/dtos/requests/CheckConfirmationCodeRequest";
import ResendConfirmationCodeEmailRequest from "@/models/interfaces/dtos/requests/ResendConfirmationCodeEmailRequest";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";

import {
   post,
   get,
   patch,
   deleteVerb,
} from "@/models/interfaces/dtos/requests/RequestDto";
import RefreshTokenRequest from "@/models/interfaces/dtos/requests/RefreshTokenRequest";

export default class RequestDtoBuilder {
   private static _auth: string = "auth";
   private static _email: string = "email";
   private static _user: string = "user";

   static LoginRequest(requestBody: LoginRequest): RequestDto {
      return {
         path: `${this._auth}`,
         httpMethod: post,
         requestBody: requestBody,
      };
   }

   static SignUp(requestBody: SignUpRequest): RequestDto {
      return {
         path: `${this._auth}/signup`,
         httpMethod: post,
         requestBody: requestBody,
      };
   }

   static ForgotPassword(requestBody: ForgotPasswordRequest): RequestDto {
      return {
         path: `${this._auth}/forgot-password`,
         httpMethod: post,
         requestBody: requestBody,
      };
   }

   static LoginWithPlatformRequest(
      requestBody: LoginOrSignUpWithPlatformRequest,
   ): RequestDto {
      return {
         path: `${this._auth}/oauth`,
         httpMethod: post,
         requestBody: requestBody,
      };
   }

   static IsEmailRegistered(email?: string): RequestDto {
      return {
         path: `${this._auth}/isEmailRegistered/${email}`,
         httpMethod: get,
      } as const;
   }

   static SendContactEmailRequest(
      requestBody: SendContactEmailRequest,
   ): RequestDto {
      return {
         path: `${this._email}/contact`,
         httpMethod: post,
         requestBody: requestBody,
      };
   }

   static SendConfirmationCodeEmail(
      requestBody: SendConfirmationCodeRequest,
   ): RequestDto {
      return {
         path: `${this._email}/confirmation`,
         httpMethod: post,
         requestBody: requestBody,
      };
   }

   static ResendConfirmationCodeEmail(
      requestBody: ResendConfirmationCodeEmailRequest,
   ): RequestDto {
      return {
         path: `${this._email}/confirmation/resend`,
         httpMethod: post,
         requestBody: requestBody,
      };
   }

   static CheckConfirmationCode(
      requestBody: CheckConfirmationCodeRequest,
   ): RequestDto {
      return {
         path: "confirmation",
         httpMethod: post,
         requestBody: requestBody,
      };
   }

   static CheckConfirmationCodeEmailAlreadySent(email: string): RequestDto {
      return {
         path: `confirmation/sent/${email}`,
         httpMethod: get,
      };
   }

   static GetUser(): RequestDto {
      return {
         path: `${this._user}`,
         httpMethod: get,
         useAuth: true,
      };
   }

   static ChangeUserData(requestBody: ChangeUserDataRequestDto): RequestDto {
      return {
         path: `${this._user}`,
         httpMethod: patch,
         requestBody: requestBody,
         useAuth: true,
      };
   }

   static ChangeUserPassword(
      requestBody: ChangeUserPasswordRequestDto,
   ): RequestDto {
      return {
         path: `${this._user}/password`,
         httpMethod: patch,
         requestBody: requestBody,
         useAuth: true,
      };
   }

   static DeleteUserAccount(): RequestDto {
      return {
         path: `${this._user}`,
         httpMethod: deleteVerb,
         useAuth: true,
      };
   }

   static RefreshToken(requestBody: RefreshTokenRequest): RequestDto {
      return {
         path: `${this._auth}/refresh-token`,
         requestBody: requestBody,
         httpMethod: post,
         useAuth: false,
      };
   }

   static DeleteUser(): RequestDto {
      return {
         path: `${this._auth}`,
         httpMethod: deleteVerb,
         useAuth: true,
      };
   }
}
