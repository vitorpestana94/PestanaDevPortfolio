import { useMutation } from "@tanstack/react-query";
import { MutationDefaultProps } from "@/models/interfaces/api/ApiInterfaces";
import UserService from "@/services/UserService";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import ChangeUserDataResponseDto from "@/models/interfaces/dtos/responses/ChangeUserDataResponseDto";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";
import ChangeUserPasswordResponseDto from "@/models/interfaces/dtos/responses/ChangeUserPasswordResponseDto";
import DeleteUserResponseDto from "@/models/interfaces/dtos/responses/DeleteUserResponseDto";

export function useChangeUserData(): MutationDefaultProps<
   ChangeUserDataResponseDto,
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
   ChangeUserPasswordResponseDto,
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

export function useDeleteUserAccount(): MutationDefaultProps<
   DeleteUserResponseDto,
   void
> {
   return useMutation({
      mutationFn: async () => {
         return await UserService.DeleteUserAccount();
      },
      mutationKey: ["deleteUserAccount"],
      retry: false,
   });
}
