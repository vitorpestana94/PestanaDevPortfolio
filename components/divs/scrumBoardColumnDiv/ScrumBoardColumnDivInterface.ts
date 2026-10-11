import { ColumnProps } from "@/components/ui/kanban-board";

export default interface ScrumBoardColumnDivInterface extends ColumnProps {
   boardId: string;
   onAddTask: (columnId: string) => void;
}
