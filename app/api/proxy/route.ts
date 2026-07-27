import { NextRequest } from "next/server";
import { handleRequest, handleGetRequest } from "@/utils/proxy/proxyHandlers";

export async function GET(req: NextRequest) {
   return handleGetRequest(req);
}

export async function POST(req: NextRequest) {
   return handleRequest(req, "POST");
}

export async function PUT(req: NextRequest) {
   return handleRequest(req, "PUT");
}


export async function PATCH(req: NextRequest) {
   return handleRequest(req, "PATCH");
}


export async function DELETE(req: NextRequest) {
   return handleRequest(req, "DELETE");
}