import RequestDto from "@/models/interfaces/dtos/requests/dtos/RequestDto";
import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import LoginWithPlatformRequest from "@/models/interfaces/dtos/requests/LoginWithPlatformRequest";
export default class RequestDtoBuilder {
  static LoginRequest(requestBody: LoginRequest): RequestDto {
    return { path: "login", httpMethod: "post", requestBody: requestBody };
  }

  static LoginWithPlatformRequest(
    requestBody: LoginWithPlatformRequest
  ): RequestDto {
    return {
      path: "login/platform",
      httpMethod: "post",
      requestBody: requestBody,
    };
  }
}
