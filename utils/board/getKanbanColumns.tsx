import BoardData from "@/models/interfaces/dtos/board/BoardData";
import BoardTask from "@/models/interfaces/dtos/board/BoardTask";
import BoardUser from "@/models/interfaces/dtos/board/BoardUser";
import { ColumnData, ColumnStatus, TagVariant, CardData } from "@/components/ui/kanban-board";
import Icon from "@/components/icons/Icons";
import { getDeadlineAsLocaleString, isOverdue } from "@/utils/dates/deadlineHandlers";

const lastPosition = 5;

const iconPerPosition: { [key: number]: React.ReactNode } = {
   3: <Icon iconName="eyeOn" className="aspect-square w-3.25 stroke-[#38b6ff]" />,
   4: <Icon iconName="tool" className="aspect-square w-3.25 stroke-white" />,
};

const tagPerTaskType: { [key: string]: TagVariant } = {
   bug: "bug",
   design: "design",
   docs: "docs",
   improvement: "improvement",
};

function getColumnStatus(position: number): ColumnStatus {
   if (position === 1) return "todo";

   return position === lastPosition ? "done" : "in-progress";
}

function getCard(
   task: BoardTask,
   boardUsers: BoardUser[],
   isDoneColumn: boolean,
   locale: string,
   deadlineLabel: string,
): CardData {
   const owner = boardUsers.find((user) => user.id === task.taskOwnerId);

   return {
      id: task.id,
      title: task.taskName,
      description: task.taskDescription ?? undefined,
      tags: task.taskType
         ? [{ label: task.taskType, variant: tagPerTaskType[task.taskType.toLowerCase()] ?? "feature" }]
         : [],
      assignee: owner ? { name: owner.name || owner.email } : undefined,
      date: task.deadline
         ? `${deadlineLabel} ${getDeadlineAsLocaleString(task.deadline, locale)}`
         : undefined,
      isOverdue: !!task.deadline && !isDoneColumn && isOverdue(task.deadline),
   };
}

export default function getKanbanColumns(
   data: BoardData,
   locale: string,
   deadlineLabel: string,
): ColumnData[] {
   return [...data.boardColumns]
      .sort((a, b) => a.position - b.position)
      .map((column) => ({
         id: column.id,
         title: column.name,
         status: getColumnStatus(column.position),
         icon: iconPerPosition[column.position],
         cards: data.tasks
            .filter((task) => task.columnId === column.id)
            .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
            .map((task) =>
               getCard(task, data.boardUsers, column.position === lastPosition, locale, deadlineLabel),
            ),
      }));
}
