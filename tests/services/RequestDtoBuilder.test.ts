import { describe, it, expect } from "vitest";
import builder from "@/services/request/RequestDtoBuilder";

const boardId = "board-id";
const taskId = "task-id";

describe("RequestDtoBuilder (board)", () => {
   it("builds the get board request with the board id as path param", () => {
      expect(builder.GetBoard(boardId)).toEqual({ path: "board", pathParams: [boardId] });
   });

   it("builds the board members request", () => {
      expect(builder.GetBoardMembers(boardId)).toEqual({
         path: "board",
         pathParams: [boardId, "members"],
      });
   });

   it("builds the create task request", () => {
      const request = { columnId: "column-id", taskName: "Login page" };

      expect(builder.CreateTask(boardId, request)).toEqual({
         path: `board/${boardId}/tasks`,
         requestBody: request,
      });
   });

   it("builds the update task request with the clear deadline flag", () => {
      expect(builder.UpdateTask(boardId, taskId, { clearDeadline: true })).toEqual({
         path: `board/${boardId}/tasks/${taskId}`,
         requestBody: { clearDeadline: true },
      });
   });

   it("builds the remove member request", () => {
      expect(builder.RemoveMember(boardId, "user-id")).toEqual({
         path: `board/${boardId}/members/user-id`,
      });
   });
});
