/**
 * @param fetchFunction - Promise that fetches data from the api
 * @param dataHandler - Function that handles the data before returning it
 */

export default async function QueryHandler<T>(
   fetchFunction: Promise<T>,
   dataHandler?: (data: T) => any,
) {
   let response = await fetchFunction;

   return dataHandler ? dataHandler(response) : response;
}
