"use server";

import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import RequestService from "@/services/request/RequestService";
import ResponseDto from "@/models/interfaces/dtos/ResponseDto";

export default async function apiRequest(
   request: RequestDto,
): Promise<ResponseDto> {
   const requestService = await RequestService();
   const response = await requestService.requestApi(request);

   if (!response.ok) {
      console.log(response);
      throw new Error("request-failed");
   }

   const responseData: ResponseDto = await response.json();

   return responseData;
}
