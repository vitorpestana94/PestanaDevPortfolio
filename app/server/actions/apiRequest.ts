"use server";

import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import RequestService from "@/services/request/RequestService";
import ResponseDto from "@/models/interfaces/dtos/responses/ResponseDto";

export default async function apiRequest(
   request: RequestDto,
): Promise<ResponseDto> {
   const requestService = await RequestService();
   let response = null;

   try {
      response = await requestService.requestApi(request);
   } catch (error: any) {
      throw new Error("500");
   }

   const responseData: ResponseDto = await response.json();

   responseData.statusCode = response.status;
   responseData.isSuccess = response.ok;

   return responseData;
}
