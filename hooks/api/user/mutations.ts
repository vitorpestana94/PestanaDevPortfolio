import { useMutation } from "@tanstack/react-query";
import { MutationDefaultProps } from "@/models/interfaces/api/ApiInterfaces";
import UserService from "@/services/UserService";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";

export function useChangeUserData(): MutationDefaultProps<
   void,
   ChangeUserDataRequestDto
> {
   return useMutation({
      mutationFn: async (changeUserDataRequestDto) => {
         return await UserService.ChangeUserData(changeUserDataRequestDto);
      },
      mutationKey: ["changeUserData"],
      retry: false,
   });
}

export function useChangePassword(): MutationDefaultProps<
   void,
   ChangeUserPasswordRequestDto
> {
   return useMutation({
      mutationFn: async (changeUserPasswordRequestDto) => {
         return await UserService.ChangeUserPassword(
            changeUserPasswordRequestDto,
         );
      },
      mutationKey: ["changePassword"],
      retry: false,
   });
}

export function useDeleteUserAccount(): MutationDefaultProps<void, void> {
   return useMutation({
      mutationFn: async () => {
         return await UserService.DeleteUserAccount();
      },
      mutationKey: ["deleteUserAccount"],
      retry: false,
   });
}
