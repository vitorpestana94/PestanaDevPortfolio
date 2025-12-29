import NextAuth from "next-auth";
import { UserRole } from "./models/enums/UserRole";

declare module "next-auth" {
    interface Session {
        provider: string;
        role: UserRole;
        id: string;
        loginWithProviderFailed: boolean;
        userNotRegistered: boolean;
        loginFailed: boolean;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id_token: string;
    }
}