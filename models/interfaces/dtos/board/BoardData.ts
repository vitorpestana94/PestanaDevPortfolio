import Board from "./Board";
import BoardTask from "./BoardTask";
import BoardUser from "./BoardUser";
import BoardColumn from "./BoardColumn";

export default interface BoardData {
   board: Board;
   tasks: BoardTask[];
   boardUsers: BoardUser[];
   boardColumns: BoardColumn[];
}
