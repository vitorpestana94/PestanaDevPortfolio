import builder from "./request/RequestDtoBuilder";
import { clientApi } from "@/lib/api/client";
import { proxy } from "@/constants/httpConstants";
import CreateBoardRequest from "@/models/interfaces/dtos/requests/board/CreateBoardRequest";
import UpdateBoardRequest from "@/models/interfaces/dtos/requests/board/UpdateBoardRequest";
import CreateTaskRequest from "@/models/interfaces/dtos/requests/board/CreateTaskRequest";
import UpdateTaskRequest from "@/models/interfaces/dtos/requests/board/UpdateTaskRequest";
import UpdateColumnRequest from "@/models/interfaces/dtos/requests/board/UpdateColumnRequest";
import AddMemberRequest from "@/models/interfaces/dtos/requests/board/AddMemberRequest";
import GetBoardsResponseDto from "@/models/interfaces/dtos/responses/board/GetBoardsResponseDto";
import GetBoardDataResponseDto from "@/models/interfaces/dtos/responses/board/GetBoardDataResponseDto";
import GetBoardMembersResponseDto from "@/models/interfaces/dtos/responses/board/GetBoardMembersResponseDto";
import CreateTaskResponseDto from "@/models/interfaces/dtos/responses/board/CreateTaskResponseDto";
import AddMemberResponseDto from "@/models/interfaces/dtos/responses/board/AddMemberResponseDto";

export default class BoardService {
   static async CreateBoard(request: CreateBoardRequest) {
      const response = await clientApi.post(proxy, builder.CreateBoard(request));

      return response.data;
   }

   static async GetBoards(): Promise<GetBoardsResponseDto> {
      const response = await clientApi.get(proxy, {
         params: builder.GetBoards(),
      });

      return response.data;
   }

   static async GetBoard(boardId: string): Promise<GetBoardDataResponseDto> {
      const response = await clientApi.get(proxy, {
         params: builder.GetBoard(boardId),
      });

      return response.data;
   }

   static async UpdateBoard(boardId: string, request: UpdateBoardRequest) {
      const response = await clientApi.patch(proxy, builder.UpdateBoard(boardId, request));

      return response.data;
   }

   static async DeleteBoard(boardId: string) {
      const response = await clientApi.delete(proxy, {
         data: builder.DeleteBoard(boardId),
      });

      return response.data;
   }

   static async CreateTask(boardId: string, request: CreateTaskRequest): Promise<CreateTaskResponseDto> {
      const response = await clientApi.post(proxy, builder.CreateTask(boardId, request));

      return response.data;
   }

   static async UpdateTask(boardId: string, taskId: string, request: UpdateTaskRequest) {
      const response = await clientApi.patch(proxy, builder.UpdateTask(boardId, taskId, request));

      return response.data;
   }

   static async DeleteTask(boardId: string, taskId: string) {
      const response = await clientApi.delete(proxy, {
         data: builder.DeleteTask(boardId, taskId),
      });

      return response.data;
   }

   static async UpdateColumn(boardId: string, columnId: string, request: UpdateColumnRequest) {
      const response = await clientApi.patch(proxy, builder.UpdateColumn(boardId, columnId, request));

      return response.data;
   }

   static async GetBoardMembers(boardId: string): Promise<GetBoardMembersResponseDto> {
      const response = await clientApi.get(proxy, {
         params: builder.GetBoardMembers(boardId),
      });

      return response.data;
   }

   static async AddMember(boardId: string, request: AddMemberRequest): Promise<AddMemberResponseDto> {
      const response = await clientApi.post(proxy, builder.AddMember(boardId, request));

      return response.data;
   }

   static async RemoveMember(boardId: string, userId: string) {
      const response = await clientApi.delete(proxy, {
         data: builder.RemoveMember(boardId, userId),
      });

      return response.data;
   }
}
