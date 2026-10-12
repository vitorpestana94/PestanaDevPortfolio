export default interface TaskDeadlineChanged {
   taskId: string;
   taskName: string;
   oldDeadline: string | null;
   newDeadline: string | null;
}
