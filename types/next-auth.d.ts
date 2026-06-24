import { DefaultSession } from "next-auth";
import { UserRole } from "./models/enums/UserRole";

declare module "next-auth" {
   interface Session {
      provider: string;
      id: string;
      user: DefaultSession["user"];
   }
}

declare module "next-auth/jwt" {
   interface JWT {
      id_token: string;
      // deviceId: string;
   }
}

export {};
