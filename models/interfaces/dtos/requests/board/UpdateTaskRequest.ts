export default interface UpdateTaskRequest {
   columnId?: string | null;
   taskOwnerId?: string | null;
   taskName?: string | null;
   taskType?: string | null;
   taskDescription?: string | null;
   deadline?: string | null;
   clearDeadline?: boolean;
}
