import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import ApiToken from "@/models/interfaces/dtos/responses/ApiToken";
import { useMutation } from "@tanstack/react-query";
import { MutationDefaultProps } from "@/models/interfaces/api/ApiInterfaces";
import LoginService from "@/services/LoginService";

export function useLogin(): MutationDefaultProps<
  ApiToken | string,
  LoginRequest
> {
  return useMutation({
    mutationFn: async (loginRequest) => {
      return await LoginService.login(loginRequest);
    },
    onError: (error) => {
      if (error?.message === "Invalid Credentials") {
        return "Invalid Credentials";
      }
      console.log(error?.message);
      throw new Error(error?.message);
    },
    mutationKey: ["loginMutation"],
    retry: false,
  });
}
