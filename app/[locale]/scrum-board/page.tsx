import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import LastScrumBoardPage from "@/components/pages/LastScrumBoard";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("scrumBoard.title")}`,
      description: t("scrumBoard.description"),
   };
}

export default function LastScrumBoard() {
   return <LastScrumBoardPage />;
}
