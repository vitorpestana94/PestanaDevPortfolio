import LoginOrSignUpWithPlatform from "@/models/interfaces/dtos/requests/LoginOrSignUpWithPlatformRequest";
import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import ApiToken from "@/models/interfaces/dtos/responses/ApiToken";

export default class PlatformService {
  static async loginOrSignUpWithPlatform(
    request: LoginOrSignUpWithPlatform
  ): Promise<ApiToken> {
    return await QueryHandler(
      apiRequest(builder.LoginWithPlatformRequest(request))
    );
  }
}
