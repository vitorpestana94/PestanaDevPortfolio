import BoardTask from "../../board/BoardTask";

export default interface CreateTaskResponseDto {
   task: BoardTask;
   message: string;
}
