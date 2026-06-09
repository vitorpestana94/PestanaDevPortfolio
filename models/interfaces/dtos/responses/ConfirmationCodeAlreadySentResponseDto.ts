import ResponseDto from "../ResponseDto";

export default interface ConfirmationCodeAlreadySentResponseDto extends ResponseDto {
   confirmationCodeAlreadySent: boolean;
}
