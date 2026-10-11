import Board from "@/models/interfaces/dtos/board/Board";

export type EditableBoardField = "name" | "description";

export default interface ScrumBoardHeaderDivInterface {
   board: Board;
   isOwner: boolean;
}
