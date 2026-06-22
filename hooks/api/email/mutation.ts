import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import SendConfirmationCodeRequest from "@/models/interfaces/dtos/requests/SendConfirmationCodeRequest";
import ResendConfirmationCodeEmailRequest from "@/models/interfaces/dtos/requests/ResendConfirmationCodeEmailRequest";
import { useMutation } from "@tanstack/react-query";
import { MutationDefaultProps } from "@/models/interfaces/api/ApiInterfaces";
import EmailService from "@/services/EmailService";

export function useSendContactEmail(): MutationDefaultProps<
   void,
   SendContactEmailRequest
> {
   return useMutation({
      mutationFn: async (sendContactEmaiLRequest) => {
         return await EmailService.SendContactEmail(sendContactEmaiLRequest);
      },
      mutationKey: ["sendContactEmail"],
      retry: false,
   });
}

export function useSendConfirmationCodeEmail(): MutationDefaultProps<
   void,
   SendConfirmationCodeRequest
> {
   return useMutation({
      mutationFn: async (sendConfirmationCodeRequest) => {
         return await EmailService.SendConfirmationCodeEmail(
            sendConfirmationCodeRequest,
         );
      },
      mutationKey: ["sendConfirmationCode"],
      retry: false,
   });
}

export function useResendConfirmationCodeEmail(): MutationDefaultProps<
   void,
   ResendConfirmationCodeEmailRequest
> {
   return useMutation({
      mutationFn: async (resendConfirmationCodeRequest) => {
         return await EmailService.ResendConfirmationCodeEmail(
            resendConfirmationCodeRequest,
         );
      },
      mutationKey: ["resendConfirmationCode"],
      retry: false,
   });
}
