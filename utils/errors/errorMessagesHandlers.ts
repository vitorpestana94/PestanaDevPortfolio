const splitError = (error: string) => {
   return error.split(":");
};

export function errorMessageHandler(
   statusCode: number,
   message: string,
): string {
   return `${statusCode}: ${message}`;
}

export function getErrorStatusCode(message: string) {
   return splitError(message)[0];
}

export function getErrorCode(message: string) {
   return splitError(message)[1].trim();
}

export function getErrorMessage(message: string) {
   return splitError(message)[2];
}

export function errorObjectMessageHandler(error: Error) {
   return error instanceof Error ? error.message : "Error!";
}
