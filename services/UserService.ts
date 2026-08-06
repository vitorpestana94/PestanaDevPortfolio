import builder from "./request/RequestDtoBuilder";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";
import { clientApi } from "@/lib/api/client";
import { proxy } from "@/constants/httpConstants";

export default class UserService {
   static async ChangeUserData(request: ChangeUserDataRequestDto) {
      const response = await clientApi.patch(proxy, builder.ChangeUserData(request));

      return response.data;
   }

   static async ChangeUserPassword(request: ChangeUserPasswordRequestDto) {
      const response = await clientApi.patch(proxy, builder.ChangeUserPassword(request));

      return response.data;
   }
   
   static async DeleteUserAccount() {
      const response = await clientApi.delete(proxy, {
         data: builder.DeleteUserAccount(),
      });

      return response.data;
   }
}
