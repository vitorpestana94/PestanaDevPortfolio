/**
 * @param fetchFunction - Promise that fetches data from the api
 * @param dataHandler - Function that handles the data before returning it
 */

import ResponseDto from "@/models/interfaces/dtos/responses/ResponseDto";

export default async function QueryHandler(
   fetchFunction: Promise<ResponseDto>,
   dataHandler?: (data: any) => any,
) {
   const response = await fetchFunction;

   return dataHandler ? dataHandler(response) : response;
}
