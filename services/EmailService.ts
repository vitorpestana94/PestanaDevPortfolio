import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";

export default class EmailService {
  static async SendContactEmail(
    request: SendContactEmailRequest
  ): Promise<void> {
    return await QueryHandler(
      apiRequest(builder.SendContactEmailRequest(request))
    );
  }
}
