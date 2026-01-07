import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import LoginOrSignUpWithPlatformRequest from "@/models/interfaces/dtos/requests/LoginOrSignUpWithPlatformRequest";
import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
export default class RequestDtoBuilder {
  static LoginRequest(requestBody: LoginRequest): RequestDto {
    return { path: "login", httpMethod: "post", requestBody: requestBody };
  }

  static LoginWithPlatformRequest(
    requestBody: LoginOrSignUpWithPlatformRequest
  ): RequestDto {
    return {
      path: "platform/auth",
      httpMethod: "post",
      requestBody: requestBody,
    };
  }

  static IsEmailRegistered(email?: string) {
    return {
      path: `sign-up/isEmailRegistered/${email}`,
      httpMethod: "get",
    } as const;
  }

  static SendContactEmailRequest(requestBody: SendContactEmailRequest) {
    return {
      path: "email/contact",
      httpMethod: "post" as const,
      requestBody: requestBody,
    };
  }
}
