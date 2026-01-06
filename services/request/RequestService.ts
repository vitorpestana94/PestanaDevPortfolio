"use server";

import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error("build error: API URL NOT DEFINED.");
}

export default async function RequestService() {
  async function requestApi(request: RequestDto): Promise<Response> {
    return await fetch(getUrl(request), {
      method: request.httpMethod.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.requestBody),
    });
  }

  return { requestApi };
}

function getUrl(request: RequestDto) {
  return `${apiUrl}/${getPathWithParams(request)}`;
}

function getPathWithParams(request: RequestDto): string {
  return request.pathParams?.length
    ? `${request.path}/${request.pathParams?.join("/")}`
    : request.path;
}
