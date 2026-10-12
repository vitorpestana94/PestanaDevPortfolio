"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useGetBoards } from "@/hooks/api/board/queries";

export default function FirstScrumBoardSection() {
   const locale = useLocale();
   const router = useRouter();
   const { data } = useGetBoards();

   useEffect(() => {
      if (!data) return;

      router.replace(
         data.boards.length
            ? `/${locale}/scrum-board/${data.boards[0].id}`
            : `/${locale}/scrum-board/create`,
      );
   }, [data]);

   return null;
}
