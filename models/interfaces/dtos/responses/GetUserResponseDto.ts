import { RegistrationType } from "@/models/types/RegistrationType";
import ResponseDto from "./ResponseDto";

export default interface GetUserResponseDto extends ResponseDto {
   name: string;
   email: string;
   registerType: RegistrationType;
}
