const errorCodes = ["400", "401", "403", "500"];

export default function useRequesthErros(callBacks: {
   unauthorized?: (...args: unknown[]) => void;
   forbidden?: (...args: unknown[]) => void;
   unexpected?: (...args: unknown[]) => void; // treating 500 erros as unexpects erros here.
   badRequest?: (...args: unknown[]) => void;
}) {

   function getNextStatusCode(errorMessage: string){
      return errorCodes.find(errorCode =>
         errorMessage.includes(errorCode)
      );
   }

   function handleRequestError(error: string, ...args: unknown[]) {
      switch (getNextStatusCode(error)) {
         case errorCodes[0]:
            if (callBacks.badRequest) {
               callBacks.badRequest(...args);
            }
         case errorCodes[1]:
            if (callBacks.unauthorized) {
               callBacks.unauthorized(...args);
            }
            break;
         case errorCodes[2]:
            if (callBacks.forbidden) {
               callBacks.forbidden(...args);
            }
            break;
         case errorCodes[3]:
            if (callBacks.unexpected) {
               callBacks.unexpected(...args);
            }
            break;
         default:
            if (callBacks.unexpected) {
               callBacks.unexpected(...args);
            }
            break;
      }
   }

   return { handleRequestError };
}
