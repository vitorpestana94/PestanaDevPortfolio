export default interface TaskDeadlineChanged {
   taskId: string;
   taskName: string;
   oldDeadline: string | null; // null means the deadline was set
   newDeadline: string | null; // null means the deadline was removed
}
