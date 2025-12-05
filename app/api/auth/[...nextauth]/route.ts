import NextAuth from 'next-auth';
import { nextAuthOptions } from '@/utils/authentication/nextAuthOptions';

const handler = async (req: Request, ctx: any) => {
    return NextAuth(nextAuthOptions)(req, ctx);
};

export { handler as GET, handler as POST };