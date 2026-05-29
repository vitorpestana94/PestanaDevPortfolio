import ResponseDto from "./dtos/ResponseDto";

export default interface ApiToken extends ResponseDto {
   token?: string;
   refreshToken?: string;
   apiTokens: {};
}
