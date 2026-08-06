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
      const response = await clientApi.post(proxy, builder.SendContactEmailRequest(request));
      
      return response.data;
   }

   static async SendConfirmationCodeEmail(
      request: SendConfirmationCodeRequest,
   ): Promise<void> {
      const response = await clientApi.post(proxy, builder.SendConfirmationCodeEmail(request));

      await response.data;
   }

   static async ResendConfirmationCodeEmail(
      request: ResendConfirmationCodeEmailRequest,
   ): Promise<void> {
      const response = await clientApi.post(proxy, builder.ResendConfirmationCodeEmail(request));
      
      return response.data;
   }
}
