import { QueryClient } from "@tanstack/react-query";
import Board from "@/models/interfaces/dtos/board/Board";
import BoardTask from "@/models/interfaces/dtos/board/BoardTask";
import BoardColumn from "@/models/interfaces/dtos/board/BoardColumn";
import BoardMember from "@/models/interfaces/dtos/board/BoardMember";
import BoardData from "@/models/interfaces/dtos/board/BoardData";
import GetBoardDataResponseDto from "@/models/interfaces/dtos/responses/board/GetBoardDataResponseDto";
import GetBoardMembersResponseDto from "@/models/interfaces/dtos/responses/board/GetBoardMembersResponseDto";
import GetBoardsResponseDto from "@/models/interfaces/dtos/responses/board/GetBoardsResponseDto";

export const emptyGuid = "00000000-0000-0000-0000-000000000000";

function setBoardData(queryClient: QueryClient, boardId: string, setData: (data: BoardData) => BoardData) {
   queryClient.setQueryData<GetBoardDataResponseDto>(["getBoard", boardId], (previous) =>
      previous ? { ...previous, data: setData(previous.data) } : previous,
   );
}

function setMembers(queryClient: QueryClient, boardId: string, setData: (members: BoardMember[]) => BoardMember[]) {
   queryClient.setQueryData<GetBoardMembersResponseDto>(["getBoardMembers", boardId], (previous) =>
      previous ? { ...previous, members: setData(previous.members) } : previous,
   );
}

export function removeBoardFromList(queryClient: QueryClient, boardId: string) {
   queryClient.setQueryData<GetBoardsResponseDto>(["getBoards"], (previous) =>
      previous ? { ...previous, boards: previous.boards.filter((b) => b.id !== boardId) } : previous,
   );
}

export function upsertTask(queryClient: QueryClient, boardId: string, task: BoardTask) {
   setBoardData(queryClient, boardId, (data) => ({
      ...data,
      tasks: [...data.tasks.filter((t) => t.id !== task.id), task],
   }));
}

export function removeTask(queryClient: QueryClient, boardId: string, taskId: string) {
   setBoardData(queryClient, boardId, (data) => ({
      ...data,
      tasks: data.tasks.filter((t) => t.id !== taskId),
   }));
}

export function moveTask(queryClient: QueryClient, boardId: string, taskId: string, columnId: string) {
   setBoardData(queryClient, boardId, (data) => ({
      ...data,
      tasks: data.tasks.map((t) => (t.id === taskId ? { ...t, columnId } : t)),
   }));
}

export function setColumns(queryClient: QueryClient, boardId: string, boardColumns: BoardColumn[]) {
   setBoardData(queryClient, boardId, (data) => ({ ...data, boardColumns }));
}

export function setBoard(queryClient: QueryClient, boardId: string, board: Board) {
   setBoardData(queryClient, boardId, (data) => ({ ...data, board }));
}

export function addMember(queryClient: QueryClient, boardId: string, member: BoardMember) {
   setBoardData(queryClient, boardId, (data) => ({
      ...data,
      boardUsers: [...data.boardUsers.filter((u) => u.id !== member.id), member],
   }));

   setMembers(queryClient, boardId, (members) => [...members.filter((m) => m.id !== member.id), member]);
}

export function removeMember(queryClient: QueryClient, boardId: string, userId: string) {
   setBoardData(queryClient, boardId, (data) => ({
      ...data,
      boardUsers: data.boardUsers.filter((u) => u.id !== userId),
      tasks: data.tasks.map((t) => (t.taskOwnerId === userId ? { ...t, taskOwnerId: emptyGuid } : t)),
   }));

   setMembers(queryClient, boardId, (members) => members.filter((m) => m.id !== userId));
}
