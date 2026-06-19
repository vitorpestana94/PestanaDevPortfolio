import { useMutation } from "@tanstack/react-query";
import { MutationDefaultProps } from "@/models/interfaces/api/ApiInterfaces";
import ConfirmationCodeService from "@/services/ConfirmationCodeService";
import CheckConfirmationCodeRequest from "@/models/interfaces/dtos/requests/CheckConfirmationCodeRequest";

export function useCheckConfirmationCode(): MutationDefaultProps<
   void,
   CheckConfirmationCodeRequest
> {
   return useMutation({
      mutationFn: async (request) => {
         return await ConfirmationCodeService.CheckConfirmationCode(request);
      },
      mutationKey: ["checkConfirmationCode"],
      retry: false,
   });
}
