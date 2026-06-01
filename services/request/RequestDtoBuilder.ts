import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import LoginOrSignUpWithPlatformRequest from "@/models/interfaces/dtos/requests/LoginOrSignUpWithPlatformRequest";
import SendConfirmationCodeRequest from "@/models/interfaces/dtos/requests/SendConfirmationCodeRequest";
import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import CheckConfirmationCodeRequest from "@/models/interfaces/dtos/requests/CheckConfirmationCodeRequest";
import ResendConfirmationCodeEmailRequest from "@/models/interfaces/dtos/requests/ResendConfirmationCodeEmailRequest";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";

export default class RequestDtoBuilder {
   private static _auth: string = "auth";
   private static _email: string = "email";

   static LoginRequest(requestBody: LoginRequest): RequestDto {
      return {
         path: `${this._auth}`,
         httpMethod: "post",
         requestBody: requestBody,
      };
   }

   static SignUp(requestBody: SignUpRequest) {
      return {
         path: `${this._auth}/signup`,
         httpMethod: "post" as const,
         requestBody: requestBody,
      };
   }

   static ForgotPassword(requestBody: ForgotPasswordRequest) {
      return {
         path: `${this._auth}/forgot-password`,
         httpMethod: "post" as const,
         requestBody: requestBody,
      };
   }

   static LoginWithPlatformRequest(
      requestBody: LoginOrSignUpWithPlatformRequest,
   ): RequestDto {
      return {
         path: `${this._auth}/oauth`,
         httpMethod: "post",
         requestBody: requestBody,
      };
   }

   static IsEmailRegistered(email?: string) {
      return {
         path: `${this._auth}/isEmailRegistered/${email}`,
         httpMethod: "get",
      } as const;
   }

   static SendContactEmailRequest(requestBody: SendContactEmailRequest) {
      return {
         path: `${this._email}/contact`,
         httpMethod: "post" as const,
         requestBody: requestBody,
      };
   }

   static SendConfirmationCodeEmail(requestBody: SendConfirmationCodeRequest) {
      return {
         path: `${this._email}/confirmation`,
         httpMethod: "post" as const,
         requestBody: requestBody,
      };
   }

   static ResendConfirmationCodeEmail(
      requestBody: ResendConfirmationCodeEmailRequest,
   ) {
      return {
         path: `${this._email}/confirmation/resend`,
         httpMethod: "post" as const,
         requestBody: requestBody,
      };
   }

   static CheckConfirmationCode(requestBody: CheckConfirmationCodeRequest) {
      return {
         path: "confirmation",
         httpMethod: "post" as const,
         requestBody: requestBody,
      };
   }

   static CheckConfirmationCodeEmailAlreadySent(email: string) {
      return {
         path: `confirmation/sent/${email}`,
         httpMethod: "get" as const,
      };
   }
}
