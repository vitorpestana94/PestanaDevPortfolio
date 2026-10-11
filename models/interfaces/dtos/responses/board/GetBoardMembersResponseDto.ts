import BoardMember from "../../board/BoardMember";

export default interface GetBoardMembersResponseDto {
   members: BoardMember[];
   message: string;
}
