import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import IsEmailRegisteredResponseDto from "@/models/interfaces/dtos/responses/IsEmailRegisteredResponseDto";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import ApiToken from "@/models/interfaces/dtos/responses/ApiToken";

export default class SignUpService {
  static async isEmailRegistered(
    email?: string,
  ): Promise<IsEmailRegisteredResponseDto> {
    return await QueryHandler(apiRequest(builder.IsEmailRegistered(email)));
  }

  static async signup(requestBody: SignUpRequest): Promise<ApiToken> {
    return await QueryHandler(apiRequest(builder.SignUp(requestBody)));
  }
}
