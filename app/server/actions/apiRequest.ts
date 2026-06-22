"use server";

import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import RequestService from "@/services/request/RequestService";
import { errorMessageHandler } from "@/utils/errors/errorMessagesHandlers";

export default async function apiRequest(request: RequestDto): Promise<any> {
   const requestService = await RequestService();
   const res = await requestService.requestApi(request);

   if (!res.ok) {
      const error = await res.json().catch(() => null);

      throw new Error(
         errorMessageHandler(res.status, error?.message ?? "Request failed"),
      );
   }

   return res.json();
}
