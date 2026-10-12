import { NextRequest, NextResponse } from "next/server";
import { serverApi } from "@/lib/api/server";
import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import axios, { AxiosResponse } from "axios";

export async function handleGetRequest(req: NextRequest) {
   try {
      const params = req.nextUrl.searchParams;
      const proxyBody: RequestDto = {
         path: params.get("path") ?? "",
         pathParams: params.getAll("pathParams[]"),
         queryParams: params.getAll("queryParams[]"),
      };

      if (!isValidRequest(proxyBody)) {
         return getInvalidRequestResponse();
      }

      const api = await serverApi(req);

      const response = await api.request({
         method: "GET",
         url: getPathWithParams(proxyBody),
         params: getQueryParams(proxyBody.queryParams),
      });

      return getResponse(response);
   } catch (error) {
      return handleError(error);
   }
}

export async function handleRequest(req: NextRequest, method: string) {
   try {
      const proxyBody: RequestDto = await req.json();

      if (!isValidRequest(proxyBody)) {
         return getInvalidRequestResponse();
      }

      const api = await serverApi(req);

      const response = await api.request({
         method: method,
         url: getPathWithParams(proxyBody),
         data: proxyBody.requestBody,
      });

      return getResponse(response);
   } catch (error) {
      return handleError(error);
   }
}

function handleError(error: unknown) {
   if (axios.isAxiosError(error)) {
      return NextResponse.json(
         { message: error.response?.data?.message ?? "unexpected" },
         { status: error.response?.status ?? 500 },
      );
   }

   return NextResponse.json({ message: "unexpected" }, { status: 500 });
}

function getResponse(response: AxiosResponse) {
   if (response.status === 204) {
      return new NextResponse(null, { status: 204 });
   }

   return NextResponse.json(response.data, { status: response.status });
}

function getInvalidRequestResponse() {
   return NextResponse.json({ message: "unexpected" }, { status: 400 });
}

function isDotSegment(segment: string) {
   return segment === "." || segment === "..";
}

function isValidRequest(request: RequestDto): boolean {
   const path = request.path;

   if (!path || path.includes("://") || path.includes("\\") || path.startsWith("/")) {
      return false;
   }

   return !path.split("/").some(isDotSegment) && !(request.pathParams ?? []).some(isDotSegment);
}

function getPathWithParams(request: RequestDto): string {
   return request.pathParams?.length
      ? `${request.path}/${request.pathParams.map(encodeURIComponent).join("/")}`
      : request.path;
}

function getQueryParams(queryParams?: string[]) {
   const params = new URLSearchParams();

   if (queryParams) {
      queryParams.forEach((param) => {
         const separatorIndex = param.indexOf(":");

         if (separatorIndex === -1) return;

         params.append(param.slice(0, separatorIndex), param.slice(separatorIndex + 1));
      });
   }

   return params;
}
