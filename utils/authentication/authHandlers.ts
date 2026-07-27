"use server";

import { nextAuthOptions } from "./nextAuthOptions";
import { getServerSession } from "next-auth";
import { Session } from "next-auth";

export async function getSession(): Promise<Session | null> {
   const session = await getServerSession(nextAuthOptions);

   return session;
}