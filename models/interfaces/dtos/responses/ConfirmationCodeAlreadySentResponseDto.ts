import ResponseDto from "./dtos/ResponseDto";

export default interface ConfirmationCodeAlreadySentResponseDto extends ResponseDto {
  confirmationCodeAlreadySent: boolean;
}
