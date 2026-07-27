import { useQuery } from "@tanstack/react-query";
import AuthService from "@/services/AuthServiceClient";

export function useIsEmailRegistered(email?: string) {
   return useQuery({
      queryKey: ["isEmailRegistered", email],
      queryFn: () => AuthService.isEmailRegistered(email),
      enabled: false,
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes cache
   });
}
