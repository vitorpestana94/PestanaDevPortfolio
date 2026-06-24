"use server";

import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import RequestService from "@/services/request/RequestService";
import { errorMessageHandler } from "@/utils/errors/errorMessagesHandlers";
import { hasJson, getErrorMessage } from "@/utils/http/httpHelpers";

export default async function apiRequest(request: RequestDto): Promise<any> {
   const requestService = await RequestService();
   const res = await requestService.requestApi(request);
   const theresJson = hasJson(res);

   if (!res.ok) {
      throw new Error(
         errorMessageHandler(
            res.status,
            await getErrorMessage(theresJson, res),
         ),
      );
   }

   return theresJson ? res.json() : null;
}
