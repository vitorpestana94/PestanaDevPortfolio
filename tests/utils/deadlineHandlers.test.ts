import { describe, it, expect } from "vitest";
import {
   getDeadlineDate,
   isOverdue,
   getDeadlineAsInputValue,
   getDeadlineFromInputValue,
} from "@/utils/dates/deadlineHandlers";

describe("deadlineHandlers", () => {
   it("treats a deadline without offset as UTC", () => {
      expect(getDeadlineDate("2026-10-30T18:00:00").toISOString()).toBe("2026-10-30T18:00:00.000Z");
   });

   it("keeps a deadline that already has the UTC offset", () => {
      expect(getDeadlineDate("2026-10-30T18:00:00Z").toISOString()).toBe("2026-10-30T18:00:00.000Z");
   });

   it("marks a past deadline as overdue", () => {
      expect(isOverdue("2000-01-01T00:00:00")).toBe(true);
   });

   it("doesn't mark a future deadline as overdue", () => {
      expect(isOverdue("2999-01-01T00:00:00")).toBe(false);
   });

   it("formats the deadline for datetime-local inputs", () => {
      expect(getDeadlineAsInputValue("2026-10-30T18:00:00")).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/);
   });

   it("sends the input value as UTC and reads it back on the same local time", () => {
      const deadline = getDeadlineFromInputValue("2026-10-30T18:00");

      expect(deadline.endsWith("Z")).toBe(true);
      expect(getDeadlineAsInputValue(deadline)).toBe("2026-10-30T18:00");
   });
});
