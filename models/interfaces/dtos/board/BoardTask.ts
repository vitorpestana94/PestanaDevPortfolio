export default interface BoardTask {
   id: string;
   boardId: string;
   columnId: string;
   taskOwnerId: string;
   taskType: string | null;
   taskName: string;
   taskDescription: string | null;
   deadline: string | null;
   createdAt: string;
   updatedAt: string;
}
