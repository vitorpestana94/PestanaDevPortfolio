import BoardListItem from "../../board/BoardListItem";

export default interface GetBoardsResponseDto {
   boards: BoardListItem[];
   message: string;
}
