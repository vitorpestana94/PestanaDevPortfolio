export const emailValidationPattern =
   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function isEmailValid(email?: string): boolean {
   if (!email) {
      return false;
   }

   return emailValidationPattern.test(email); // This regex is good enough for simple email format validations.
}
