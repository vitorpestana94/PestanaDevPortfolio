import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import IsEmailRegisteredResponseDto from "@/models/interfaces/dtos/responses/IsEmailRegisteredResponseDto";

export default class SignUpService {
  static async isEmailRegistered(
    email?: string,
  ): Promise<IsEmailRegisteredResponseDto> {
    return await QueryHandler(apiRequest(builder.IsEmailRegistered(email)));
  }
}
