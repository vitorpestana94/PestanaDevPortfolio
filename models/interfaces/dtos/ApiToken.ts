import ResponseDto from "./responses/ResponseDto";

export default interface ApiToken extends ResponseDto {
   token?: string;
   refreshToken?: string;
}
