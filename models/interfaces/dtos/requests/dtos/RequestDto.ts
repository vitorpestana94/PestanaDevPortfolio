import LoginRequest from "../LoginRequest";

interface RequestBody extends LoginRequest {}

export type HttpMethod = "post" | "get" | "delete" | "put";

export default interface RequestDto {
  path: string;
  httpMethod: HttpMethod;
  requestBody?: RequestBody;
  queryParams?: string[];
  pathParams?: string[];
}
