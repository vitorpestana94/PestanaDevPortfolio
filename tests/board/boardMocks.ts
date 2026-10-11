import BoardData from "@/models/interfaces/dtos/board/BoardData";
import BoardTask from "@/models/interfaces/dtos/board/BoardTask";

export const boardId = "board-id";
export const ownerId = "owner-id";
export const memberId = "member-id";

export function getTask(task: Partial<BoardTask>): BoardTask {
   return {
      id: "task-id",
      boardId,
      columnId: "column-1",
      taskOwnerId: ownerId,
      taskType: "Feature",
      taskName: "Task",
      taskDescription: null,
      deadline: null,
      createdAt: "2026-10-11T12:00:00",
      updatedAt: "2026-10-11T12:00:00",
      ...task,
   };
}

export function getBoardData(): BoardData {
   return {
      board: {
         id: boardId,
         ownerId,
         name: "My Scrum Board",
         description: null,
         createdAt: "2026-10-11T12:00:00",
         updatedAt: "2026-10-11T12:00:00",
      },
      // The API doesn't guarantee the columns order.
      boardColumns: [5, 3, 1, 4, 2].map((position) => ({
         id: `column-${position}`,
         boardId,
         name: `Column ${position}`,
         position,
         createdAt: "2026-10-11T12:00:00",
      })),
      boardUsers: [
         { id: ownerId, name: "Vitor Pestana", email: "vitor@email.com" },
         { id: memberId, name: "", email: "member@email.com" },
      ],
      tasks: [
         getTask({ id: "second", columnId: "column-1", createdAt: "2026-10-11T13:00:00" }),
         getTask({ id: "first", columnId: "column-1", createdAt: "2026-10-11T12:00:00" }),
         getTask({ id: "member-task", columnId: "column-2", taskOwnerId: memberId }),
      ],
   };
}
