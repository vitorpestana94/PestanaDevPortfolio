import builder from "./request/RequestDtoBuilder";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import IsEmailRegisteredResponseDto from "@/models/interfaces/dtos/responses/IsEmailRegisteredResponseDto";
import { clientApi } from "@/lib/api/client";
import { proxy } from "@/constants/httpConstants";

export default class AuthServiceClient {
   static async ForgotPassword(request: ForgotPasswordRequest): Promise<void> {
      return await clientApi.post(proxy, builder.ForgotPassword(request));
   }

   static async isEmailRegistered(email?: string): Promise<IsEmailRegisteredResponseDto> {
      const response = await clientApi.get(proxy, {
         params: builder.IsEmailRegistered(email),
      });

      return response.data;
   }

   static async LogouUser(): Promise<void> {
      const req = builder.DeleteUser();

      await clientApi.delete<void>(proxy, {
         data: req,
      });
    }
}
