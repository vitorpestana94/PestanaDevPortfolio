"use server";

import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import { cookies } from "next/headers";
import { getToken } from "next-auth/jwt";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const nextAuthSecret = process.env.NEXTAUTH_SECRET;

if (!apiUrl) {
   throw new Error("build error: API URL NOT DEFINED.");
}

if (!nextAuthSecret) {
   throw new Error("build error: NEXT AUTH SECRECT NOT DEFINED.");
}

export default async function RequestService() {
   async function requestApi(request: RequestDto): Promise<Response> {
      return await fetch(getUrl(request), {
         method: request.httpMethod.toUpperCase(),
         headers: {
            "Content-Type": "application/json",
            ...(request?.useAuth && {
               Authorization: await getJWT(),
            }),
         },
         body: JSON.stringify(request?.requestBody),
      });
   }

   return { requestApi };
}

function getUrl(request?: RequestDto) {
   return `${apiUrl}/${getPathWithParams(request)}`;
}

async function getJWT() {
   const tokens = await getToken({
      req: await getNextAuthCookies(),
      secret: nextAuthSecret,
   });

   return `Bearer ${tokens?.token}`;
}

async function getNextAuthCookies() {
   // Getting cookies here because on a server-action it's not possible to use requests.
   return {
      cookies: Object.fromEntries(
         (await cookies())
            .getAll()
            .map((cookie) => [cookie.name, cookie.value]),
      ),
   } as any;
}

function getPathWithParams(request?: RequestDto): string {
   return request?.pathParams?.length
      ? `${request.path}/${request.pathParams?.join("/")}`
      : (request?.path ?? "");
}
