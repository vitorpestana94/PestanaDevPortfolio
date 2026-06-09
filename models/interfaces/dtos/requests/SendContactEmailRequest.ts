import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";

export default interface SendContactEmailRequest {
   clientEmail?: string;
   clientName?: string;
   clientMessage?: string;
   clientLocale?: string;
   confirmationCodeEmailType: ConfirmationCodeEmailKind;
}
