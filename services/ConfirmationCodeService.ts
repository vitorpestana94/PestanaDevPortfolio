import builder from "./request/RequestDtoBuilder";
import CheckConfirmationCodeRequest from "@/models/interfaces/dtos/requests/CheckConfirmationCodeRequest";
import ConfirmationCodeAlreadySentResponseDto from "@/models/interfaces/dtos/responses/ConfirmationCodeAlreadySentResponseDto";
import { clientApi } from "@/lib/api/client";
import { proxy } from "@/constants/httpConstants";

export default class ConfirmationCodeService {
   static async CheckConfirmationCode(request: CheckConfirmationCodeRequest) {
      const response = await clientApi.post(proxy, builder.CheckConfirmationCode(request));

      return response.data;
   }

   static async CheckConfirmationCodeEmailAlreadySent(email: string): Promise<ConfirmationCodeAlreadySentResponseDto> {
      const response = await clientApi.get(proxy, {
         params: builder.CheckConfirmationCodeEmailAlreadySent(email),
      });

      return response.data;
   }
}
