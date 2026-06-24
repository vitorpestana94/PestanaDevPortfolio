import CaptchaTokenRequestDto from "./CaptchaTokenRequestDto";

export default interface LoginRequest extends CaptchaTokenRequestDto {
   email?: string;
   password?: string;
}
