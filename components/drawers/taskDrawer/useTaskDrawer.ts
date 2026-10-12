import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateTask, useUpdateTask, useDeleteTask } from "@/hooks/api/board/mutations";
import UpdateTaskRequest from "@/models/interfaces/dtos/requests/board/UpdateTaskRequest";
import BoardTask from "@/models/interfaces/dtos/board/BoardTask";
import { upsertTask, removeTask } from "@/utils/board/boardCacheHandlers";
import { getDeadlineAsInputValue, getDeadlineFromInputValue } from "@/utils/dates/deadlineHandlers";
import Interface from "./TaskDrawerInterface";

export default function useTaskDrawer({ boardId, task, columnId, myUserId, close }: Interface) {
   const t = useTranslations("scrumBoard.task");
   const queryClient = useQueryClient();
   const isEdit = task !== undefined;
   const {
      watch,
      register,
      setValue,
      handleSubmit,
      formState: { errors, dirtyFields },
   } = useForm<UpdateTaskRequest>({
      mode: "onBlur",
      defaultValues: {
         taskName: task?.taskName ?? "",
         taskType: task?.taskType ?? "",
         taskDescription: task?.taskDescription ?? "",
         taskOwnerId: task?.taskOwnerId ?? myUserId,
         deadline: task?.deadline ? getDeadlineAsInputValue(task.deadline) : "",
      },
   });

   const { mutateAsync: createTask, isPending: isCreating } = useCreateTask();
   const { mutateAsync: updateTask, isPending: isUpdating } = useUpdateTask();
   const { mutateAsync: deleteTask, isPending: isDeleting } = useDeleteTask();

   async function create(data: UpdateTaskRequest) {
      const { task: newTask } = await createTask({
         boardId,
         request: {
            columnId: columnId!,
            taskName: data.taskName!,
            taskType: data.taskType || null,
            taskDescription: data.taskDescription || null,
            taskOwnerId: data.taskOwnerId || null,
            deadline: data.deadline ? getDeadlineFromInputValue(data.deadline) : null,
         },
      });

      upsertTask(queryClient, boardId, newTask);
   }

   async function update(data: UpdateTaskRequest) {
      const changedFields: UpdateTaskRequest = Object.fromEntries(
         Object.keys(dirtyFields).map((key) => [key, data[key as keyof UpdateTaskRequest]]),
      );
      const { deadline, ...otherFields } = changedFields;
      const request: UpdateTaskRequest = otherFields;

      if (dirtyFields.deadline) {
         if (deadline) {
            request.deadline = getDeadlineFromInputValue(deadline);
         } else {
            request.clearDeadline = true;
         }
      }

      if (Object.keys(request).length === 0) return;

      await updateTask({ boardId, taskId: task!.id, request });

      const { clearDeadline, ...updatedFields } = request;

      upsertTask(queryClient, boardId, {
         ...task!,
         ...updatedFields,
         deadline: clearDeadline ? null : (updatedFields.deadline ?? task!.deadline),
      } as BoardTask);
   }

   async function submit(data: UpdateTaskRequest) {
      if (isCreating || isUpdating) return;

      if (isEdit) {
         await update(data);
      } else {
         await create(data);
      }

      close();
   }

   function selectOwner(userId: string) {
      setValue("taskOwnerId", userId, { shouldDirty: true });
   }

   function clearDeadline() {
      setValue("deadline", "", { shouldDirty: true });
   }

   async function remove() {
      if (isDeleting || !task) return;

      await deleteTask({ boardId, taskId: task.id });

      removeTask(queryClient, boardId, task.id);
      close();
   }

   return {
      t,
      isEdit,
      ownerId: watch("taskOwnerId"),
      hasDeadline: !!watch("deadline"),
      errors,
      isLoading: isCreating || isUpdating,
      register,
      handleSubmit,
      submit,
      remove,
      selectOwner,
      clearDeadline,
   };
}
