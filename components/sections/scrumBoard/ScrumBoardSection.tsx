"use client";

import { MotionConfig } from "motion/react";
import { gentleSpring } from "@/components/ui/kanban-board";
import useScrumBoardSection from "./useScrumBoardSection";
import BoardHeader from "@/components/divs/scrumBoardHeaderDiv/ScrumBoardHeaderDiv";
import BoardMenu from "@/components/spans/scrumBoardMenuSpan/ScrumBoardMenuSpan";
import BoardColumn from "@/components/divs/scrumBoardColumnDiv/ScrumBoardColumnDiv";
import Trash from "@/components/divs/scrumBoardTrashDiv/ScrumBoardTrashDiv";
import TaskDrawer from "@/components/drawers/taskDrawer/TaskDrawer";

export default function ScrumBoardSection({ boardId }: { boardId: string }) {
   const {
      boardData,
      myUserId,
      columns,
      isOwner,
      editingTask,
      creatingTaskColumnId,
      showTaskDrawer,
      dragState,
      setDragState,
      setEditingTaskId,
      setCreatingTaskColumnId,
      closeTaskDrawer,
      leaveBoard,
      moveDroppedTask,
      deleteDraggedTask,
   } = useScrumBoardSection(boardId);

   if (!boardData) return null;

   return (
      <section className="scrumBoard w-full flex-1 flex flex-col gap-y-8 px-5 sm:px-10 xl:px-36 py-10">
         <div className="flex flex-col lg:flex-row justify-between gap-y-5">
            <BoardHeader board={boardData.board} isOwner={isOwner} />
            <BoardMenu
               boardId={boardId}
               boardName={boardData.board.name}
               isOwner={isOwner}
               myUserId={myUserId}
               leaveBoard={leaveBoard}
            />
         </div>
         <MotionConfig transition={gentleSpring}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 items-start">
               {columns.map((column, index) => (
                  <BoardColumn
                     key={column.id}
                     boardId={boardId}
                     position={index + 1}
                     column={column}
                     dragState={dragState}
                     setDragState={setDragState}
                     onDrop={moveDroppedTask}
                     onCardClick={setEditingTaskId}
                     onAddTask={setCreatingTaskColumnId}
                  />
               ))}
            </div>
         </MotionConfig>
         <Trash isDragging={dragState !== null} onDrop={deleteDraggedTask} />
         {showTaskDrawer && (
            <TaskDrawer
               boardId={boardId}
               boardUsers={boardData.boardUsers}
               myUserId={myUserId}
               task={editingTask}
               columnId={creatingTaskColumnId ?? undefined}
               close={closeTaskDrawer}
            />
         )}
      </section>
   );
}
