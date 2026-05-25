import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";

export default class ForgotPasswordService {
   static async ForgotPassword(request: ForgotPasswordRequest): Promise<void> {
      return await QueryHandler(apiRequest(builder.ForgotPassword(request)));
   }
}
