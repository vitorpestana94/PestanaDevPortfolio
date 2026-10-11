import RequestDto from "@/models/interfaces/dtos/requests/RequestDto";
import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import LoginOrSignUpWithPlatformRequest from "@/models/interfaces/dtos/requests/LoginOrSignUpWithPlatformRequest";
import SendConfirmationCodeRequest from "@/models/interfaces/dtos/requests/SendConfirmationCodeRequest";
import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import CheckConfirmationCodeRequest from "@/models/interfaces/dtos/requests/CheckConfirmationCodeRequest";
import ResendConfirmationCodeEmailRequest from "@/models/interfaces/dtos/requests/ResendConfirmationCodeEmailRequest";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";
import RefreshTokenRequest from "@/models/interfaces/dtos/requests/RefreshTokenRequest";
import CreateBoardRequest from "@/models/interfaces/dtos/requests/board/CreateBoardRequest";
import UpdateBoardRequest from "@/models/interfaces/dtos/requests/board/UpdateBoardRequest";
import CreateTaskRequest from "@/models/interfaces/dtos/requests/board/CreateTaskRequest";
import UpdateTaskRequest from "@/models/interfaces/dtos/requests/board/UpdateTaskRequest";
import UpdateColumnRequest from "@/models/interfaces/dtos/requests/board/UpdateColumnRequest";
import AddMemberRequest from "@/models/interfaces/dtos/requests/board/AddMemberRequest";

export default class RequestDtoBuilder {
   private static _auth: string = "auth";
   private static _email: string = "email";
   private static _user: string = "user";
   private static _nasa: string = "nasa";
   private static _art: string = "metropolitan-museum";
   private static _board: string = "board";

   static LoginRequest(requestBody: LoginRequest): RequestDto {
      return {
         path: `${this._auth}`,
         requestBody: requestBody,
      };
   }

   static SignUp(requestBody: SignUpRequest): RequestDto {
      return {
         path: `${this._auth}/signup`,
         requestBody: requestBody,
      };
   }

   static ForgotPassword(requestBody: ForgotPasswordRequest): RequestDto {
      return {
         path: `${this._auth}/forgot-password`,
         requestBody: requestBody,
      };
   }

   static LoginWithPlatformRequest(
      requestBody: LoginOrSignUpWithPlatformRequest,
   ): RequestDto {
      return {
         path: `${this._auth}/oauth`,
         requestBody: requestBody,
      };
   }

   static IsEmailRegistered(email?: string): RequestDto {
      return {
         path: `${this._auth}/isEmailRegistered`,
         pathParams: [email!],
      } as const;
   }

   static SendContactEmailRequest(
      requestBody: SendContactEmailRequest,
   ): RequestDto {
      return {
         path: `${this._email}/contact`,
         requestBody: requestBody,
      };
   }

   static SendConfirmationCodeEmail(
      requestBody: SendConfirmationCodeRequest,
   ): RequestDto {
      return {
         path: `${this._email}/confirmation`,
         requestBody: requestBody,
      };
   }

   static ResendConfirmationCodeEmail(
      requestBody: ResendConfirmationCodeEmailRequest,
   ): RequestDto {
      return {
         path: `${this._email}/confirmation/resend`,
         requestBody: requestBody,
      };
   }

   static CheckConfirmationCode(
      requestBody: CheckConfirmationCodeRequest,
   ): RequestDto {
      return {
         path: "confirmation",
         requestBody: requestBody,
      };
   }

   static CheckConfirmationCodeEmailAlreadySent(email: string): RequestDto {
      return {
         path: `confirmation/sent`,
         pathParams: [email],
      };
   }

   static GetUser(): RequestDto {
      return {
         path: `${this._user}`,
      };
   }

   static ChangeUserData(requestBody: ChangeUserDataRequestDto): RequestDto {
      return {
         path: `${this._user}`,
         requestBody: requestBody,
      };
   }

   static ChangeUserPassword(
      requestBody: ChangeUserPasswordRequestDto,
   ): RequestDto {
      return {
         path: `${this._user}/password`,
         requestBody: requestBody,
      };
   }

   static DeleteUserAccount(): RequestDto {
      return {
         path: `${this._user}`,
      };
   }

   static RefreshToken(requestBody: RefreshTokenRequest): RequestDto {
      return {
         path: `${this._auth}/refresh-token`,
         requestBody: requestBody,
      };
   }

   static DeleteUser(): RequestDto {
      return {
         path: `${this._auth}`,
      };
   }

   static GetAstronomyPictureOfTheDay(d?: string): RequestDto {
      return {
         path: `${this._nasa}`,
         queryParams: d ? [`date:${d}`] : undefined
      };
   }

   static GetArts(s: string): RequestDto {
      return {
         path: `${this._art}`,
         queryParams: [`search:${s}`]
      };
   }

   static GetAstronomyPictureOfThePeriod(startDate: string, endDate: string): RequestDto {
      return {
         path: `${this._nasa}/period`,
         queryParams: [`startDate:${startDate}`, `endDate:${endDate}`]
      };
   }

   static CreateBoard(requestBody: CreateBoardRequest): RequestDto {
      return {
         path: `${this._board}`,
         requestBody: requestBody,
      };
   }

   static GetBoards(): RequestDto {
      return {
         path: `${this._board}`,
      };
   }

   static GetBoard(boardId: string): RequestDto {
      return {
         path: `${this._board}`,
         pathParams: [boardId],
      };
   }

   static UpdateBoard(boardId: string, requestBody: UpdateBoardRequest): RequestDto {
      return {
         path: `${this._board}/${boardId}`,
         requestBody: requestBody,
      };
   }

   static DeleteBoard(boardId: string): RequestDto {
      return {
         path: `${this._board}/${boardId}`,
      };
   }

   static CreateTask(boardId: string, requestBody: CreateTaskRequest): RequestDto {
      return {
         path: `${this._board}/${boardId}/tasks`,
         requestBody: requestBody,
      };
   }

   static UpdateTask(boardId: string, taskId: string, requestBody: UpdateTaskRequest): RequestDto {
      return {
         path: `${this._board}/${boardId}/tasks/${taskId}`,
         requestBody: requestBody,
      };
   }

   static DeleteTask(boardId: string, taskId: string): RequestDto {
      return {
         path: `${this._board}/${boardId}/tasks/${taskId}`,
      };
   }

   static UpdateColumn(boardId: string, columnId: string, requestBody: UpdateColumnRequest): RequestDto {
      return {
         path: `${this._board}/${boardId}/columns/${columnId}`,
         requestBody: requestBody,
      };
   }

   static GetBoardMembers(boardId: string): RequestDto {
      return {
         path: `${this._board}`,
         pathParams: [boardId, "members"],
      };
   }

   static AddMember(boardId: string, requestBody: AddMemberRequest): RequestDto {
      return {
         path: `${this._board}/${boardId}/members`,
         requestBody: requestBody,
      };
   }

   static RemoveMember(boardId: string, userId: string): RequestDto {
      return {
         path: `${this._board}/${boardId}/members/${userId}`,
      };
   }
}
