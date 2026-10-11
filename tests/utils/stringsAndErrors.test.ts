import { describe, it, expect } from "vitest";
import { getErrorCode, getErrorMessage } from "@/utils/errors/errorMessagesHandlers";
import isEmailValid from "@/utils/strings/verifyEmailFormat";

describe("errorMessagesHandlers", () => {
   it("gets the 4 characters error code from the API message", () => {
      expect(getErrorCode("7E1A : You are not a member of this board!")).toBe("7E1A");
   });

   it("gets the error message without the code", () => {
      expect(getErrorMessage("7E1A : You are not a member of this board!").trim()).toBe(
         "You are not a member of this board!",
      );
   });
});

describe("verifyEmailFormat", () => {
   it("accepts a valid email", () => {
      expect(isEmailValid("friend@email.com")).toBe(true);
   });

   it("rejects an invalid or empty email", () => {
      expect(isEmailValid("friend@email")).toBe(false);
      expect(isEmailValid(undefined)).toBe(false);
   });
});
