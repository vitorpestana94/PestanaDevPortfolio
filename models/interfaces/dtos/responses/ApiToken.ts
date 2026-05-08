import ResponseDto from "./dtos/ResponseDto";

export default interface ApiToken extends ResponseDto {
  apiTokens: {
    token?: string;
    refreshToken?: string;
  };
}
