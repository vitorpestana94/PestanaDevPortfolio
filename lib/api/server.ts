import axios from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function serverApi(req: NextRequest) {

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  return axios.create({
    baseURL: process.env.API_URL,
    headers:{
      Authorization:`Bearer ${token?.token}`,
      "Content-Type":"application/json"
    }
  });
}