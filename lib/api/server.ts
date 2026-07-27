import axios from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function serverApi(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token?.token) {
    headers.Authorization = `Bearer ${token.token}`;
  }

  return axios.create({
    baseURL: process.env.API_URL,
    headers,
  });
}