import { describe, it, expect, beforeEach } from "vitest";
import { QueryClient } from "@tanstack/react-query";
import {
   emptyGuid,
   upsertTask,
   removeTask,
   moveTask,
   removeMember,
   removeBoardFromList,
} from "@/utils/board/boardCacheHandlers";
import GetBoardDataResponseDto from "@/models/interfaces/dtos/responses/board/GetBoardDataResponseDto";
import GetBoardsResponseDto from "@/models/interfaces/dtos/responses/board/GetBoardsResponseDto";
import { boardId, memberId, getBoardData, getTask } from "./boardMocks";

let queryClient: QueryClient;

const getCachedBoard = () =>
   queryClient.getQueryData<GetBoardDataResponseDto>(["getBoard", boardId])!.data;

beforeEach(() => {
   queryClient = new QueryClient();
   queryClient.setQueryData(["getBoard", boardId], { data: getBoardData(), message: "Ok" });
});

describe("boardCacheHandlers", () => {
   it("adds a new task", () => {
      upsertTask(queryClient, boardId, getTask({ id: "new-task" }));

      expect(getCachedBoard().tasks.some((task) => task.id === "new-task")).toBe(true);
   });

   it("replaces an existing task instead of duplicating it", () => {
      upsertTask(queryClient, boardId, getTask({ id: "first", taskName: "Updated" }));

      const tasks = getCachedBoard().tasks.filter((task) => task.id === "first");

      expect(tasks).toHaveLength(1);
      expect(tasks[0].taskName).toBe("Updated");
   });

   it("removes a task", () => {
      removeTask(queryClient, boardId, "first");

      expect(getCachedBoard().tasks.some((task) => task.id === "first")).toBe(false);
   });

   it("moves a task to another column", () => {
      moveTask(queryClient, boardId, "first", "column-3");

      expect(getCachedBoard().tasks.find((task) => task.id === "first")!.columnId).toBe("column-3");
   });

   it("removes a member and leaves their tasks without owner", () => {
      removeMember(queryClient, boardId, memberId);

      const board = getCachedBoard();

      expect(board.boardUsers.some((user) => user.id === memberId)).toBe(false);
      expect(board.tasks.find((task) => task.id === "member-task")!.taskOwnerId).toBe(emptyGuid);
   });

   it("removes a board from the boards list", () => {
      queryClient.setQueryData<GetBoardsResponseDto>(["getBoards"], {
         boards: [
            { id: boardId, name: "Deleted" },
            { id: "other", name: "Other" },
         ],
         message: "Ok",
      });

      removeBoardFromList(queryClient, boardId);

      expect(queryClient.getQueryData<GetBoardsResponseDto>(["getBoards"])!.boards).toEqual([
         { id: "other", name: "Other" },
      ]);
   });
});
