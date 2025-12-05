import { Session, Account } from "next-auth";
import { JWT } from 'next-auth/jwt';
import type { SessionStrategy } from 'next-auth';

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
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: `/en`,
        error: `/en`,
    },
    session: {
        strategy: 'jwt' as SessionStrategy,
        maxAge: 60 * 60 * 48, // Session lifetime: 2 days. After this time, the token expires and the user must log in again.
        updateAge: 60 * 60 // The session will be updated every hour during user activity. If the user is inactive, it won't be updated; also, if jwt's exp time timeout, it will request our API again.
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    cookies: { //All the cookies below are fundamnetal to sign in with apple. Dont change it.
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
            name: 'next-auth.pkce.code_verifier',
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: true
            }
        }
    },
    callbacks: {
        async signIn({ user, account }: { user: any; account?: Account | null }) {

            return true;
        },
        async jwt({ token, account, user }: { token: JWT; account?: Account | null, user: any }) {

            return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {

            return session;
        }
    }
};