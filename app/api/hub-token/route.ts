import { NextRequest } from "next/server";
import { handleGetAccessToken } from "@/utils/authentication/accessTokenHandlers";

export async function GET(req: NextRequest) {
   return handleGetAccessToken(req);
}
