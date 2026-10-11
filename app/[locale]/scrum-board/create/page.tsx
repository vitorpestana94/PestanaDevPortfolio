import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import CreateScrumBoardPage from "@/components/pages/CreateScrumBoard";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("createScrumBoard.title")}`,
      description: t("createScrumBoard.description"),
   };
}

export default function CreateScrumBoard() {
   return <CreateScrumBoardPage />;
}
