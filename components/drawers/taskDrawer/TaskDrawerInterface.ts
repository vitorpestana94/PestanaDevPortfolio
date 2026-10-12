import BoardTask from "@/models/interfaces/dtos/board/BoardTask";
import BoardUser from "@/models/interfaces/dtos/board/BoardUser";

export default interface TaskDrawerInterface {
   boardId: string;
   boardUsers: BoardUser[];
   myUserId?: string;
   task?: BoardTask;
   columnId?: string;
   close: () => void;
}
