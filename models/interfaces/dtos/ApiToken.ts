import ResponseDto from "./ResponseDto";

export default interface ApiToken extends ResponseDto {
   token?: string;
   refreshToken?: string;
}
