import { Session, Account } from "next-auth";
import { JWT } from "next-auth/jwt";
import type { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "./authRequestHandlers";

// if (!process.env.NEXT_PUBLIC_API_URL) {
//     throw new Error("Api URL is not defined!");
// }

// if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
//     throw new Error("Google's credentials are not defined.");
// }

// if (!process.env.APPLE_CLIENT_ID) {
//     throw new Error("Apple's credentials are not defined.");
// }

export const nextAuthOptions = {
  providers: [
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // AppleProvider({
    //     clientId: process.env.APPLE_CLIENT_ID,
    //     clientSecret: await getAppleClientSecret(),
    // })
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        return await login(credentials.email, credentials.password);
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: `/en`,
    error: `/en`,
  },
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 60 * 60 * 48, // Session lifetime: 2 days. After this time, the token expires and the user must log in again.
    updateAge: 60 * 60, // The session will be updated every hour during user activity. If the user is inactive, it won't be updated; also, if jwt's exp time timeout, it will request our API again.
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  cookies: {
    //All the cookies below are fundamnetal to sign in with apple. Dont change it.
    callbackUrl: {
      name: `__Secure-next-auth.callback-url`,
      options: {
        httpOnly: false,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  callbacks: {
    async signIn({ user, account }: { user: any; account?: Account | null }) {
      if (user === null) {
        return false;
      }

      return true;
    },
    async jwt({
      token,
      account,
      user,
    }: {
      token: JWT;
      account?: Account | null;
      user: any;
    }) {
      //   if (account?.id_token && account?.provider) {
      //     token.id_token = account.id_token;
      //     token.provider = account.provider;

      //     return await loginWithProvider(
      //       account.id_token,
      //       account.provider,
      //       token
      //     );
      //   }

      if (user?.id === "error") {
        token.loginFailed = true;

        return token;
      }

      if (user?.token && user?.refreshToken) {
        token.token = user.token;
        token.refreshToken = user.refreshToken;
        token.id = user.id;
        token.role = user.role;
        token.expirationTime = user.expirationTime;
        token.deviceId = user.deviceId;
        token.provider = "";
        token.loginFailed = false;

        return token;
      }

      if (
        typeof token.expirationTime === "number" &&
        Date.now() / 1000 < token.expirationTime &&
        token.token
      ) {
        return token;
      }

      //   if (token.id && token.refreshToken) {
      //     return await refreshAccessToken(
      //       token.id as string,
      //       token.refreshToken as string,
      //       token.deviceId as string,
      //       token
      //     );
      //   }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.id = token.id as string;
      //   session.provider = token.provider as string;
      token.loginWithProviderFailed as boolean;
      session.userNotRegistered = token.userNotRegistered as boolean;
      session.loginFailed = token.loginFailed as boolean;

      return session;
    },
  },
};
