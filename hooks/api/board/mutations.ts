import { useMutation } from "@tanstack/react-query";
import { MutationDefaultProps } from "@/models/interfaces/api/ApiInterfaces";
import BoardService from "@/services/BoardService";
import CreateBoardRequest from "@/models/interfaces/dtos/requests/board/CreateBoardRequest";
import UpdateBoardRequest from "@/models/interfaces/dtos/requests/board/UpdateBoardRequest";
import CreateTaskRequest from "@/models/interfaces/dtos/requests/board/CreateTaskRequest";
import UpdateTaskRequest from "@/models/interfaces/dtos/requests/board/UpdateTaskRequest";
import UpdateColumnRequest from "@/models/interfaces/dtos/requests/board/UpdateColumnRequest";
import AddMemberRequest from "@/models/interfaces/dtos/requests/board/AddMemberRequest";
import CreateTaskResponseDto from "@/models/interfaces/dtos/responses/board/CreateTaskResponseDto";
import AddMemberResponseDto from "@/models/interfaces/dtos/responses/board/AddMemberResponseDto";
import {
   BoardParams,
   BoardRequestParams,
   TaskParams,
   ColumnParams,
   MemberParams,
} from "@/models/interfaces/dtos/requests/board/BoardRequestParams";

export function useCreateBoard(): MutationDefaultProps<void, CreateBoardRequest> {
   return useMutation({
      mutationFn: async (createBoardRequest) => {
         return await BoardService.CreateBoard(createBoardRequest);
      },
      mutationKey: ["createBoard"],
      retry: false,
   });
}

export function useUpdateBoard(): MutationDefaultProps<
   void,
   BoardRequestParams<UpdateBoardRequest>
> {
   return useMutation({
      mutationFn: async ({ boardId, request }) => {
         return await BoardService.UpdateBoard(boardId, request);
      },
      mutationKey: ["updateBoard"],
      retry: false,
   });
}

export function useDeleteBoard(): MutationDefaultProps<void, BoardParams> {
   return useMutation({
      mutationFn: async ({ boardId }) => {
         return await BoardService.DeleteBoard(boardId);
      },
      mutationKey: ["deleteBoard"],
      retry: false,
   });
}

export function useCreateTask(): MutationDefaultProps<
   CreateTaskResponseDto,
   BoardRequestParams<CreateTaskRequest>
> {
   return useMutation({
      mutationFn: async ({ boardId, request }) => {
         return await BoardService.CreateTask(boardId, request);
      },
      mutationKey: ["createTask"],
      retry: false,
   });
}

export function useUpdateTask(): MutationDefaultProps<
   void,
   TaskParams & { request: UpdateTaskRequest }
> {
   return useMutation({
      mutationFn: async ({ boardId, taskId, request }) => {
         return await BoardService.UpdateTask(boardId, taskId, request);
      },
      mutationKey: ["updateTask"],
      retry: false,
   });
}

export function useMoveTask(): MutationDefaultProps<
   void,
   TaskParams & { columnId: string }
> {
   return useMutation({
      mutationFn: async ({ boardId, taskId, columnId }) => {
         return await BoardService.UpdateTask(boardId, taskId, { columnId });
      },
      mutationKey: ["moveTask"],
      retry: false,
      meta: {
         skipGlobalLoader: true,
      },
   });
}

export function useDeleteTask(): MutationDefaultProps<void, TaskParams> {
   return useMutation({
      mutationFn: async ({ boardId, taskId }) => {
         return await BoardService.DeleteTask(boardId, taskId);
      },
      mutationKey: ["deleteTask"],
      retry: false,
   });
}

export function useUpdateColumn(): MutationDefaultProps<
   void,
   ColumnParams & { request: UpdateColumnRequest }
> {
   return useMutation({
      mutationFn: async ({ boardId, columnId, request }) => {
         return await BoardService.UpdateColumn(boardId, columnId, request);
      },
      mutationKey: ["updateColumn"],
      retry: false,
   });
}

export function useAddMember(): MutationDefaultProps<
   AddMemberResponseDto,
   BoardRequestParams<AddMemberRequest>
> {
   return useMutation({
      mutationFn: async ({ boardId, request }) => {
         return await BoardService.AddMember(boardId, request);
      },
      mutationKey: ["addMember"],
      retry: false,
   });
}

export function useAcceptInvitation(): MutationDefaultProps<
   AddMemberResponseDto,
   BoardRequestParams<AddMemberRequest>
> {
   return useMutation({
      mutationFn: async ({ boardId, request }) => {
         return await BoardService.AddMember(boardId, request);
      },
      mutationKey: ["acceptInvitation"],
      retry: false,
      meta: {
         skipGlobalErrorHandler: true,
      },
   });
}

export function useRemoveMember(): MutationDefaultProps<void, MemberParams> {
   return useMutation({
      mutationFn: async ({ boardId, userId }) => {
         return await BoardService.RemoveMember(boardId, userId);
      },
      mutationKey: ["removeMember"],
      retry: false,
   });
}
