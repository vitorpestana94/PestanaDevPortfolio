import LoginRequest from "./LoginRequest";
import LoginWithPlatformRequest from "./LoginOrSignUpWithPlatformRequest";
import SignUpRequest from "./SignUpRequest";
import SendContactEmailRequest from "./SendContactEmailRequest";

interface RequestBody
  extends LoginRequest,
    LoginWithPlatformRequest,
    SignUpRequest,
    SendContactEmailRequest {}

export type HttpMethod = "post" | "get" | "delete" | "put";

export default interface RequestDto {
  path: string;
  httpMethod: HttpMethod;
  requestBody?: RequestBody;
  queryParams?: string[];
  pathParams?: string[];
}
