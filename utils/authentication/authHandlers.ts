"use server";

import { nextAuthOptions } from "./nextAuthOptions";
import { getServerSession } from "next-auth";
import { Session } from "next-auth";

export async function getSession(): Promise<Session | null> {
    const session = await getServerSession(nextAuthOptions);

    return session;
};

export async function getIsUserLogged(): Promise<boolean> {
    const session: Session | null = await getSession();

    return session !== null;
}

export async function getIsUserLoggedAndRegistered() {
    const session: Session | null = await getSession();

    return session && !session?.userNotRegistered;
}