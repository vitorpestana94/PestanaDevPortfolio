import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import ApiToken from "@/models/interfaces/dtos/responses/ApiToken";

export default class LoginService {
  static async login(request: LoginRequest): Promise<ApiToken> {
    return await QueryHandler(apiRequest(builder.LoginRequest(request)));
  }
}
