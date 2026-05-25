import { useMutation } from "@tanstack/react-query";
import { MutationDefaultProps } from "@/models/interfaces/api/ApiInterfaces";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import ForgotPasswordService from "@/services/ForgotPasswordService";

export function useForgotPassword(): MutationDefaultProps<
   void,
   ForgotPasswordRequest
> {
   return useMutation({
      mutationFn: async (ForgotPasswordRequest) => {
         return await ForgotPasswordService.ForgotPassword(
            ForgotPasswordRequest,
         );
      },
      mutationKey: ["forgotPassword"],
      retry: false,
   });
}
