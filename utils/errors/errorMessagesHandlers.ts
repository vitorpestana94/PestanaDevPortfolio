const splitError = (error: string) => {
   return error.split(":");
};

export function getErrorCode(message: string) {
   return splitError(message)[0].trim();
}

export function getErrorMessage(message: string) {
   return splitError(message)[1];
}