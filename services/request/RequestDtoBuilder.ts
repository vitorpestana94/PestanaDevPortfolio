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
import RefreshTokenRequest from "@/models/interfaces/dtos/requests/RefreshTokenRequest";

export default class RequestDtoBuilder {
   private static _auth: string = "auth";
   private static _email: string = "email";
   private static _user: string = "user";

   static LoginRequest(requestBody: LoginRequest): RequestDto {
      return {
         path: `${this._auth}`,
         requestBody: requestBody,
      };
   }

   static SignUp(requestBody: SignUpRequest): RequestDto {
      return {
         path: `${this._auth}/signup`,
         requestBody: requestBody,
      };
   }

   static ForgotPassword(requestBody: ForgotPasswordRequest): RequestDto {
      return {
         path: `${this._auth}/forgot-password`,
         requestBody: requestBody,
      };
   }

   static LoginWithPlatformRequest(
      requestBody: LoginOrSignUpWithPlatformRequest,
   ): RequestDto {
      return {
         path: `${this._auth}/oauth`,
         requestBody: requestBody,
      };
   }

   static IsEmailRegistered(email?: string): RequestDto {
      return {
         path: `${this._auth}/isEmailRegistered`,
         pathParams: [email!],
      } as const;
   }

   static SendContactEmailRequest(
      requestBody: SendContactEmailRequest,
   ): RequestDto {
      return {
         path: `${this._email}/contact`,
         requestBody: requestBody,
      };
   }

   static SendConfirmationCodeEmail(
      requestBody: SendConfirmationCodeRequest,
   ): RequestDto {
      return {
         path: `${this._email}/confirmation`,
         requestBody: requestBody,
      };
   }

   static ResendConfirmationCodeEmail(
      requestBody: ResendConfirmationCodeEmailRequest,
   ): RequestDto {
      return {
         path: `${this._email}/confirmation/resend`,
         requestBody: requestBody,
      };
   }

   static CheckConfirmationCode(
      requestBody: CheckConfirmationCodeRequest,
   ): RequestDto {
      return {
         path: "confirmation",
         requestBody: requestBody,
      };
   }

   static CheckConfirmationCodeEmailAlreadySent(email: string): RequestDto {
      return {
         path: `confirmation/sent`,
         pathParams: [email],
      };
   }

   static GetUser(): RequestDto {
      return {
         path: `${this._user}`,
      };
   }

   static ChangeUserData(requestBody: ChangeUserDataRequestDto): RequestDto {
      return {
         path: `${this._user}`,
         requestBody: requestBody,
      };
   }

   static ChangeUserPassword(
      requestBody: ChangeUserPasswordRequestDto,
   ): RequestDto {
      return {
         path: `${this._user}/password`,
         requestBody: requestBody,
      };
   }

   static DeleteUserAccount(): RequestDto {
      return {
         path: `${this._user}`,
      };
   }

   static RefreshToken(requestBody: RefreshTokenRequest): RequestDto {
      return {
         path: `${this._auth}/refresh-token`,
         requestBody: requestBody,
      };
   }

   static DeleteUser(): RequestDto {
      return {
         path: `${this._auth}`,
      };
   }
}
