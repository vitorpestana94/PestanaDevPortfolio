import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateBoard, useUpdateBoard } from "@/hooks/api/board/mutations";
import BoardService from "@/services/BoardService";
import { CreateScrumBoardForm } from "./CreateScrumBoardDrawerInterface";

export default function useCreateScrumBoardDrawer(close?: () => void) {
   const t = useTranslations("scrumBoard.create");
   const locale = useLocale();
   const router = useRouter();
   const queryClient = useQueryClient();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<CreateScrumBoardForm>({ mode: "onBlur" });

   const { mutateAsync: createBoard, isPending: isCreating } = useCreateBoard();
   const { mutateAsync: updateBoard, isPending: isUpdating } = useUpdateBoard();

   async function submit(data: CreateScrumBoardForm) {
      if (isCreating || isUpdating) return;

      await createBoard({
         name: data.name,
         columnsNames: {
            columnNameOne: t("defaultColumns.one"),
            columnNameTwo: t("defaultColumns.two"),
            columnNameThree: t("defaultColumns.three"),
            columnNameFour: t("defaultColumns.four"),
            columnNameFive: t("defaultColumns.five"),
         },
         boardTask: {
            taskName: t("defaultTask.name"),
            taskType: t("defaultTask.type"),
            taskDescription: t("defaultTask.description"),
         },
      });

      const { boards } = await queryClient.fetchQuery({
         queryKey: ["getBoards"],
         queryFn: () => BoardService.GetBoards(),
         staleTime: 0,
      });
      const newBoard = boards[boards.length - 1];

      if (data.description) {
         await updateBoard({
            boardId: newBoard.id,
            request: { description: data.description },
         });
      }

      router.push(`/${locale}/scrum-board/${newBoard.id}`);

      if (close) {
         close();
      }
   }

   return {
      t,
      errors,
      isLoading: isCreating || isUpdating,
      register,
      handleSubmit,
      submit,
   };
}
