"use server";

import RequestDto from "@/models/interfaces/dtos/requests/dtos/RequestDto";
import RequestService from "@/services/request/RequestService";
import ResponseDto from "@/models/interfaces/dtos/responses/dtos/ResponseDto";

const requestService = await RequestService();

export default async function apiRequest(
  request: RequestDto
): Promise<ResponseDto> {
  const response = await requestService.requestApi(request);
  if (!response.ok) {
    throw new Error("request-failed");
  }

  const responseData: ResponseDto = await response.json();

  return responseData;
}
