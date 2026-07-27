import builder from "./request/RequestDtoBuilder";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";
import { clientApi } from "@/lib/api/client";
import { proxy } from "@/constants/httpConstants";

export default class UserService {
   static async ChangeUserData(request: ChangeUserDataRequestDto) {
      return await clientApi.patch(proxy, builder.ChangeUserData(request));
   }

   static async ChangeUserPassword(request: ChangeUserPasswordRequestDto) {
      return await clientApi.patch(proxy, builder.ChangeUserPassword(request));
   }
   
   static async DeleteUserAccount() {
      return await clientApi.delete(proxy, {
         data: builder.DeleteUserAccount(),
      });
   }
}
