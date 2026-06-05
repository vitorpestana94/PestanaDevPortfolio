import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";

export default interface SendConfirmationCodeRequest {
   clientEmail: string;
   clientLocale: string;
   confirmationCodeEmailType: ConfirmationCodeEmailKind;
}
