import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import CheckConfirmationCodeRequest from "@/models/interfaces/dtos/requests/CheckConfirmationCodeRequest";
import ConfirmationCodeAlreadySentResponseDto from "@/models/interfaces/dtos/responses/ConfirmationCodeAlreadySentResponseDto";

export default class ConfirmationCodeService {
   static async CheckConfirmationCode(
      request: CheckConfirmationCodeRequest,
   ): Promise<void> {
      return await apiRequest(builder.CheckConfirmationCode(request));
   }

   static async CheckConfirmationCodeEmailAlreadySent(
      email: string,
   ): Promise<ConfirmationCodeAlreadySentResponseDto> {
      return await apiRequest(
         builder.CheckConfirmationCodeEmailAlreadySent(email),
      );
   }
}
