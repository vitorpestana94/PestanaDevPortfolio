export default interface BoardNotification<T> {
   boardId: string;
   changedBy: string;
   data: T;
}
