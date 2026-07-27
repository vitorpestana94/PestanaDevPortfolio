export default interface RequestDto {
   path: string;
   requestBody?: any;
   queryParams?: string[];
   pathParams?: string[];
}
