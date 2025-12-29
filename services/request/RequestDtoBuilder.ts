import RequestDto from "@/models/interfaces/dtos/requests/dtos/RequestDto";
import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";

export default class RequestDtoBuilder {
  static GetRequestDto(requestBody: LoginRequest): RequestDto {
    return { path: "login", httpMethod: "post", requestBody: requestBody };
  }
}
