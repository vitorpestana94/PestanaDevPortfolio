import { NextRequest } from "next/server";
import { handleGetHubToken } from "@/utils/authentication/hubTokenHandlers";

export async function GET(req: NextRequest) {
   return handleGetHubToken(req);
}
