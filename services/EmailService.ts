import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import SendConfirmationCodeRequest from "@/models/interfaces/dtos/requests/SendConfirmationCodeRequest";
import ResendConfirmationCodeEmailRequest from "@/models/interfaces/dtos/requests/ResendConfirmationCodeEmailRequest";
import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";

export default class EmailService {
   static async SendContactEmail(
      request: SendContactEmailRequest,
   ): Promise<void> {
      return await apiRequest(builder.SendContactEmailRequest(request));
   }

   static async SendConfirmationCodeEmail(
      request: SendConfirmationCodeRequest,
   ): Promise<void> {
      return await apiRequest(builder.SendConfirmationCodeEmail(request));
   }

   static async ResendConfirmationCodeEmail(
      request: ResendConfirmationCodeEmailRequest,
   ): Promise<void> {
      return await apiRequest(builder.ResendConfirmationCodeEmail(request));
   }
}
