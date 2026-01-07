import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
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
