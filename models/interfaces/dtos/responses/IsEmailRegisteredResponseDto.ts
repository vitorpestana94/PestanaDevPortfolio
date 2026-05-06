import ResponseDto from "./dtos/ResponseDto";
export default interface IsEmailRegisteredResponseDto extends ResponseDto {
  isRegistered?: boolean;
}
