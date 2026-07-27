import { NextRequest, NextResponse } from "next/server";
import { serverApi } from "@/lib/api/server";
import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import axios from "axios";

export async function handleGetRequest(req: NextRequest) {
   try {
        const params = req.nextUrl.searchParams;
        const proxyBody: RequestDto = {
            path: params.get("path") ?? "",
            pathParams: params.getAll("pathParams[]"),
        };
        const api = await serverApi(req);

        const response = await api.request({
            method: "GET",
            url: getPathWithParams(proxyBody),
            data: proxyBody.requestBody,
        });

        return NextResponse.json(
            response.data,
            {
                status: response.status,
            }
        );
   } catch (error) {
      return (handleError(error))
   }
}

export async function handleRequest(req: NextRequest, method: string) {
   try {
      const proxyBody: RequestDto = await req.json();

      const api = await serverApi(req);

      const response = await api.request({
         method: method,
         url: getPathWithParams(proxyBody),
         data: proxyBody.requestBody,
      });

      return NextResponse.json(response.data, { status: response.status });

   } catch (error) {
      return (handleError(error))
   }
}

function handleError(error: unknown){
    if (axios.isAxiosError(error)) {
         return NextResponse.json({ message: error.response?.data.message ?? "unexpected" }, { status: error.response?.status ?? 500 } );
    }

    return NextResponse.json({message: "unexpected"},{ status: 500 });
}

function getPathWithParams(request: RequestDto): string {
   return request.pathParams?.length
      ? `${request.path}/${request.pathParams.join("/")}`
      : request.path;
}