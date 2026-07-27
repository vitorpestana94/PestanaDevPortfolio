import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import SendConfirmationCodeRequest from "@/models/interfaces/dtos/requests/SendConfirmationCodeRequest";
import ResendConfirmationCodeEmailRequest from "@/models/interfaces/dtos/requests/ResendConfirmationCodeEmailRequest";
import builder from "./request/RequestDtoBuilder";
import { clientApi } from "@/lib/api/client";
import { proxy } from "@/constants/httpConstants";

export default class EmailService {
   static async SendContactEmail(
      request: SendContactEmailRequest,
   ): Promise<void> {
      return await clientApi.post(proxy, builder.SendContactEmailRequest(request));
   }

   static async SendConfirmationCodeEmail(
      request: SendConfirmationCodeRequest,
   ): Promise<void> {
      await clientApi.post(proxy, builder.SendConfirmationCodeEmail(request));
   }

   static async ResendConfirmationCodeEmail(
      request: ResendConfirmationCodeEmailRequest,
   ): Promise<void> {
      return await clientApi.post(proxy, builder.ResendConfirmationCodeEmail(request));
   }
}
