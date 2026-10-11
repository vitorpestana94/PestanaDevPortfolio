import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import ScrumBoardPage from "@/components/pages/ScrumBoard";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("scrumBoard.title")}`,
      description: t("scrumBoard.description"),
   };
}

export default async function ScrumBoard({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params;

   return <ScrumBoardPage boardId={id} />;
}
