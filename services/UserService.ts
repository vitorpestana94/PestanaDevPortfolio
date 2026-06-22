import apiRequest from "@/app/server/actions/apiRequest";
import builder from "./request/RequestDtoBuilder";
import GetUserResponseDto from "@/models/interfaces/dtos/responses/GetUserResponseDto";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";

export default class UserService {
   static async GetUser(): Promise<GetUserResponseDto> {
      return await apiRequest(builder.GetUser());
   }

   static async ChangeUserData(request: ChangeUserDataRequestDto) {
      return await apiRequest(builder.ChangeUserData(request));
   }

   static async ChangeUserPassword(request: ChangeUserPasswordRequestDto) {
      return await apiRequest(builder.ChangeUserPassword(request));
   }

   static async DeleteUserAccount() {
      return await apiRequest(builder.DeleteUserAccount());
   }
}
