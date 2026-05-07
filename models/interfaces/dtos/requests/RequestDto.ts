export type HttpMethod = "post" | "get" | "delete" | "put";

export default interface RequestDto {
  path: string;
  httpMethod: HttpMethod;
  requestBody?: any;
  queryParams?: string[];
  pathParams?: string[];
}
