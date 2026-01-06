import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import IsEmailRegistered from "@/models/interfaces/dtos/responses/IsEmailRegistered";

export default class SignUpService {
  static async isEmailRegistered(email?: string): Promise<IsEmailRegistered> {
    return await QueryHandler(apiRequest(builder.IsEmailRegistered(email)));
  }
}
