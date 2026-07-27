export const post = "post";
export const get = "get";
export const deleteVerb = "delete";
export const put = "put";
export const patch = "patch";

export type HttpMethod =
   | typeof post
   | typeof get
   | typeof deleteVerb
   | typeof put
   | typeof patch;

export default interface RequestDto {
   path: string;
   requestBody?: any;
   queryParams?: string[];
   pathParams?: string[];
   useAuth?: boolean;
}
