import getStatusCodeAsInt from "@/utils/strings/getStatusCodeAsInt";

export default function useRequesthErros(callBacks: {
   unauthorized?: () => void;
   forbidden?: () => void;
   unexpected?: () => void; // treating 500 erros as unexpects erros here.
   badRequest?: () => void;
}) {
   function handleRequestError(error: string) {
      switch (getStatusCodeAsInt(error)) {
         case 400:
            if (callBacks.badRequest) {
               callBacks.badRequest();
            }
         case 401:
            if (callBacks.unauthorized) {
               callBacks.unauthorized();
            }
            break;
         case 403:
            if (callBacks.forbidden) {
               callBacks.forbidden();
            }
            break;
         case 500:
            if (callBacks.badRequest) {
               callBacks.badRequest();
            }
            break;
         default:
            if (callBacks.unexpected) {
               callBacks.unexpected();
            }
            break;
      }
   }

   return { handleRequestError };
}
