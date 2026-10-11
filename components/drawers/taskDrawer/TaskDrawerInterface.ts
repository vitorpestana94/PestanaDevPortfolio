import BoardTask from "@/models/interfaces/dtos/board/BoardTask";
import BoardUser from "@/models/interfaces/dtos/board/BoardUser";

export default interface TaskDrawerInterface {
   boardId: string;
   boardUsers: BoardUser[];
   myUserId?: string;
   task?: BoardTask; // Edits this task when it's present
   columnId?: string; // Creates a task on this column when there's no task
   close: () => void;
}
