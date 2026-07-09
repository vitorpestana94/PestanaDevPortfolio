import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import CaptchaTokenRequestDto from "./CaptchaTokenRequestDto";

export default interface SendContactEmailRequest extends CaptchaTokenRequestDto {
   clientEmail?: string;
   clientName?: string;
   clientMessage?: string;
   clientLocale?: string;
   confirmationCodeEmailType: ConfirmationCodeEmailKind;
}
