import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import CaptchaTokenRequestDto from "./CaptchaTokenRequestDto";

export default interface SendConfirmationCodeRequest extends CaptchaTokenRequestDto {
   clientEmail: string;
   clientLocale: string;
   confirmationCodeEmailType: ConfirmationCodeEmailKind;
}
