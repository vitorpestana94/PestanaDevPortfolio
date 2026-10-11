import { DefaultSession } from "next-auth";
import { UserRole } from "./models/enums/UserRole";

declare module "next-auth" {
   interface Session {
      user: {
         provider: string;
         id: string;
      } & DefaultSession["user"];
      lastBoardId?: string;
   }
}

declare module "next-auth/jwt" {
   interface JWT {
      id_token?: string;
      deviceId?: string;
      lastBoardId?: string;
   }
}

export {};
