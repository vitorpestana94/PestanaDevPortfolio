import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import GetUserResponseDto from "@/models/interfaces/dtos/responses/GetUserResponseDto";

export default class UserService {
   static async GetUser(): Promise<GetUserResponseDto> {
      return await QueryHandler(apiRequest(builder.GetUser()));
   }
}
