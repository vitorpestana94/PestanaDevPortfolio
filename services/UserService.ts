import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import QueryHandler from "@/utils/queries/queryHandler";
import GetUserResponseDto from "@/models/interfaces/dtos/responses/GetUserResponseDto";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import ChangeUserDataResponseDto from "@/models/interfaces/dtos/responses/ChangeUserDataResponseDto";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";
import ChangeUserPasswordResponseDto from "@/models/interfaces/dtos/responses/ChangeUserPasswordResponseDto";
import DeleteUserResponseDto from "@/models/interfaces/dtos/responses/DeleteUserResponseDto";

export default class UserService {
   static async GetUser(): Promise<GetUserResponseDto> {
      return await QueryHandler(apiRequest(builder.GetUser()));
   }

   static async ChangeUserData(
      request: ChangeUserDataRequestDto,
   ): Promise<ChangeUserDataResponseDto> {
      return await QueryHandler(apiRequest(builder.ChangeUserData(request)));
   }

   static async ChangeUserPassword(
      request: ChangeUserPasswordRequestDto,
   ): Promise<ChangeUserPasswordResponseDto> {
      return await QueryHandler(
         apiRequest(builder.ChangeUserPassword(request)),
      );
   }

   static async DeleteUserAccount(): Promise<DeleteUserResponseDto> {
      return await QueryHandler(apiRequest(builder.DeleteUserAccount()));
   }
}
