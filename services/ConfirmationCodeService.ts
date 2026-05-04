import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import CheckConfirmationCodeRequest from "@/models/interfaces/dtos/requests/CheckConfirmationCodeRequest";

export default class ConfirmationCodeService {
  static async CheckConfirmationCode(
    request: CheckConfirmationCodeRequest,
  ): Promise<void> {
    return await QueryHandler(
      apiRequest(builder.CheckConfirmationCode(request)),
    );
  }
}
