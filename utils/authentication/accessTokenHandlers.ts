import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// The SignalR hub can't go through the proxy, so the client needs the API token to connect to it.
export async function handleGetAccessToken(req: NextRequest) {
   const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
   });

   if (!token?.token) {
      return NextResponse.json({ message: "unexpected" }, { status: 401 });
   }

   return NextResponse.json({ token: token.token });
}
