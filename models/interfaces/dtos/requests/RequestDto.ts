import LoginRequest from "./LoginRequest";
import LoginWithPlatformRequest from "./LoginWithPlatformRequest";
import SignUpRequest from "./SignUpRequest";

interface RequestBody
  extends LoginRequest,
    LoginWithPlatformRequest,
    SignUpRequest {}

export type HttpMethod = "post" | "get" | "delete" | "put";

export default interface RequestDto {
  path: string;
  httpMethod: HttpMethod;
  requestBody?: RequestBody;
  queryParams?: string[];
  pathParams?: string[];
}
