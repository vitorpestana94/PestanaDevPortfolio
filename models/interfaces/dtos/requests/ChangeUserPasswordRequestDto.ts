export default interface ChangeUserPasswordRequestDto {
   newPassword: string;
   currentPassword: string;
   passwordConfirmation: string;
}
