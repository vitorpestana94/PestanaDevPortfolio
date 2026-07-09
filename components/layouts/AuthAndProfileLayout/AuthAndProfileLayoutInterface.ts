import { Root } from "@/components/divs/AuthDivBg/AuthDivBg";
import { ReactNode } from "react";
import GetUserResponseDto from "@/models/interfaces/dtos/SystemUser";

export default interface AuthAndProfileLayoutInterface {
   root?: Root;
   user?: GetUserResponseDto;
   children: ReactNode;
}
