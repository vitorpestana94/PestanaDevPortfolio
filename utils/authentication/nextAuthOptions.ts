import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import {
   login,
   loginOrSignUpWithPlatform,
   refreshAccessToken,
   logoutUser,
} from "./authRequestHandlers";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import { signup } from "./authRequestHandlers";

if (!process.env.API_URL) {
   throw new Error("Api URL is not defined!");
}

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
   throw new Error("Google's credentials are not defined.");
}

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
   throw new Error("Github's credentials are not defined.");
}

if (!process.env.LINKEDIN_CLIENT_ID || !process.env.LINKEDIN_CLIENT_SECRET) {
   throw new Error("Linkedin's credentials are not defined.");
}

// Tudo que está comentando deve ser revisado posteriormente, se será mantido e etc.

export const nextAuthOptions = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      GitHubProvider({
         clientId: process.env.GITHUB_CLIENT_ID,
         clientSecret: process.env.GITHUB_CLIENT_SECRET,
         authorization: { params: { scope: "read:user user:email" } },
      }),
      LinkedInProvider({
         clientId: process.env.LINKEDIN_CLIENT_ID,
         clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
         issuer: "https://www.linkedin.com/oauth",
         jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
         authorization: {
            params: { scope: "openid profile email" },
         },
         profile(profile) {
            return {
               id: profile.sub,
               name: profile.name,
               email: profile.email,
               image: profile.picture,
            };
         },
      }),
      CredentialsProvider({
         id: "credentials",
         name: "credentials",
         credentials: {
            email: { label: "email", type: "text" },
            password: { label: "password", type: "password" },
            captchaToken: { label: "captchaToken", type: "password" },
         },
         async authorize(credentials) {
            if (
               !credentials?.email ||
               !credentials?.password ||
               !credentials?.captchaToken
            ) {
               return null;
            }

            return await login(
               credentials.email,
               credentials.password,
               credentials.captchaToken,
            );
         },
      }),
      CredentialsProvider({
         id: "credentials-signup",
         name: "credentials-signup",
         credentials: {
            request: { label: "request", type: "text" },
         },
         async authorize(credentials) {
            if (!credentials?.request) {
               return null;
            }

            const request: SignUpRequest = JSON.parse(credentials.request);

            return await signup(request);
         },
      }),
   ],
   events: {
      async signOut() {
         await logoutUser();
      },
   },
   secret: process.env.NEXTAUTH_SECRET,
   pages: {
      signIn: `/`,
      error: `/`,
   },
   session: {
      strategy: "jwt" as const,
      maxAge: 60 * 30, // 60 * 60 * 12
      updateAge: 60 * 15, // 60 *  60
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
      async jwt({
         token,
         account,
         user,
      }: {
         token: JWT;
         account?: any | null;
         user: any;
      }) {
         if (
            (account?.id_token || account?.access_token) &&
            account?.provider
         ) {
            const providerToken = account?.id_token ?? account?.access_token;

            if (providerToken && account?.provider) {
               token.provider = account.provider;
               token.id_token = providerToken;
               token.deviceId = account.deviceId;
            }

            const response = await loginOrSignUpWithPlatform(
               providerToken,
               account.provider,
            );

            token.token = response?.token;
            token.refreshToken = response?.refreshToken;
            token.id = response?.id;
            token.expirationTime = response?.expirationTime;
            token.deviceId = response?.deviceId!;
         }

         if (user?.token && user?.refreshToken) {
            token.token = user.token;
            token.refreshToken = user.refreshToken;
            token.id = user.id;
            token.expirationTime = user.expirationTime;
            token.deviceId = user.deviceId;

            return token;
         }

         const now = Math.floor(Date.now() / 1000);

         const shouldRefresh =
            typeof token.expirationTime === "number" &&
            token.expirationTime - now < 60;

         if (shouldRefresh && token.refreshToken && token.id) {
            return await refreshAccessToken(
               {
                  token: token.refreshToken as string,
                  userid: token.id as string,
                  deviceId: token.deviceId as string,
               },
               token,
            );
         }
         return token;
      },
      async session({ session, token }: { session: Session; token: JWT }) {
         session.id = token.id as string;
         session.provider = token.provider as string;

         return session;
      },
   },
};
