import { RegistrationType } from "@/models/types/RegistrationType";

export default interface GetUserResponseDto {
   name: string;
   email: string;
   registerType: RegistrationType;
}
