export default interface CreateTaskRequest {
   columnId: string;
   taskName: string;
   taskType?: string | null;
   taskDescription?: string | null;
   taskOwnerId?: string | null;
   deadline?: string | null;
}
