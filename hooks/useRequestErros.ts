export default function useRequesthErros(callBacks: {
   unauthorized?: (...args: unknown[]) => void;
   forbidden?: (...args: unknown[]) => void;
   unexpected?: (...args: unknown[]) => void; // treating 500 erros as unexpects erros here.
   badRequest?: (...args: unknown[]) => void;
}) {
   function handleRequestError(error: string, ...args: unknown[]) {
      switch (error) {
         case "400":
            if (callBacks.badRequest) {
               callBacks.badRequest(...args);
            }
         case "401":
            if (callBacks.unauthorized) {
               callBacks.unauthorized(...args);
            }
            break;
         case "403":
            if (callBacks.forbidden) {
               callBacks.forbidden(...args);
            }
            break;
         case "500":
            if (callBacks.badRequest) {
               callBacks.badRequest(...args);
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
