export const unauthorized: string = "Unauthorized";
export const forbidden: string = "Forbidden";
export const unexpected: string = "Unexpected";
export const notfound: string = "Not Found";
export const badrequest: string = "Bad Request";

const status = [unauthorized, forbidden, unexpected, notfound, badrequest];

export default function getErrorMessage(errorMessage: string): string {
   let message = "";

   status.forEach((element) => {
      if (errorMessage.toLowerCase().includes(element.toLowerCase())) {
         message = element;
      }
   });

   return message;
}
