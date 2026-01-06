import { useQuery } from "@tanstack/react-query";
import SignUpService from "@/services/SignUpService";

export function useIsEmailRegistered(email?: string) {
  return useQuery({
    queryKey: ["isEmailRegistered", email],
    queryFn: () => SignUpService.isEmailRegistered(email),
    enabled: false,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}
