import { useQuery } from "@tanstack/react-query";
import UserService from "@/services/UserService";

export function useGetUser() {
   return useQuery({
      queryKey: ["getUser"],
      queryFn: () => UserService.GetUser(),
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes cache
   });
}
