import { useQuery } from "@tanstack/react-query";
import ConfirmationCodeService from "@/services/ConfirmationCodeService";

export function useCheckConfirmationCodeEmailAlreadySent(email: string) {
  return useQuery({
    queryKey: ["checkConfirmationCodeEmailAlreadySent", email],
    queryFn: () =>
      ConfirmationCodeService.CheckConfirmationCodeEmailAlreadySent(email),
    enabled: false,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}
