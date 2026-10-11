export default interface ScrumBoardMenuSpanInterface {
   boardId: string;
   boardName: string;
   isOwner: boolean;
   myUserId?: string;
   leaveBoard: () => void;
}
