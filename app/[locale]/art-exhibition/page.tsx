import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import ArtExhibitionPage from "@/components/pages/ArtExhibition";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("artExhibition.title")}`,
      description: t("artExhibition.description"),
   };
}

export default function ArtExhibition(){
    return <ArtExhibitionPage />
}