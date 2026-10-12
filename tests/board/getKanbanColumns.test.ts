import { describe, it, expect, vi } from "vitest";
import getKanbanColumns from "@/utils/board/getKanbanColumns";
import { getBoardData, getTask } from "./boardMocks";

vi.mock("@/components/icons/Icons", () => ({ default: () => null }));

const getColumns = (data = getBoardData()) => getKanbanColumns(data, "pt", "Prazo:");

describe("getKanbanColumns", () => {
   it("sorts the columns by position", () => {
      expect(getColumns().map((column) => column.id)).toEqual([
         "column-1",
         "column-2",
         "column-3",
         "column-4",
         "column-5",
      ]);
   });

   it("maps the first, middle and last columns to the Kanban status", () => {
      expect(getColumns().map((column) => column.status)).toEqual([
         "todo",
         "in-progress",
         "in-progress",
         "in-progress",
         "done",
      ]);
   });

   it("groups the tasks by column ordered by creation date", () => {
      expect(getColumns()[0].cards.map((card) => card.id)).toEqual(["first", "second"]);
   });

   it("uses the owner email when the owner has no name", () => {
      expect(getColumns()[1].cards[0].assignee?.name).toBe("member@email.com");
   });

   it("shows the deadline and highlights overdue tasks", () => {
      const data = getBoardData();
      data.tasks = [getTask({ id: "late", columnId: "column-1", deadline: "2000-01-01T00:00:00" })];

      const card = getColumns(data)[0].cards[0];

      expect(card.date?.startsWith("Prazo:")).toBe(true);
      expect(card.isOverdue).toBe(true);
   });

   it("never marks finished tasks as overdue", () => {
      const data = getBoardData();
      data.tasks = [getTask({ id: "done", columnId: "column-5", deadline: "2000-01-01T00:00:00" })];

      expect(getColumns(data)[4].cards[0].isOverdue).toBe(false);
   });
});
