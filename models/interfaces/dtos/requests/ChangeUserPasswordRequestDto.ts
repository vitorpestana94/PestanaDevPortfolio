export default interface ChangeUserPasswordRequestDto {
   newPassword: string;
   currentPassword: string;
   confirmPassword: string;
}
