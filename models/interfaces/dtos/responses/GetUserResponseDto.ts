import { RegistrationType } from "@/models/types/RegistrationType";

export default interface GetUserResponseDto {
   name: string;
   userEmail: string;
   registerType: RegistrationType;
}
