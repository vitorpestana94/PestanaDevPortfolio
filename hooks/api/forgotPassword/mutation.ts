import { useMutation } from "@tanstack/react-query";
import { MutationDefaultProps } from "@/models/interfaces/api/ApiInterfaces";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import AuthService from "@/services/AuthServiceClient";

export function useForgotPassword(): MutationDefaultProps<
   void,
   ForgotPasswordRequest
> {
   return useMutation({
      mutationFn: async (ForgotPasswordRequest) => {
         return await AuthService.ForgotPassword(ForgotPasswordRequest);
      },
      mutationKey: ["forgotPassword"],
      retry: false,
   });
}
