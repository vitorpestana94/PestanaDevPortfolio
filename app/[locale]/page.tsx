import HomePage from "@/components/pages/Home";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("home.title")}`,
      description: t("home.description"),
   };
}

export default function Home() {
   return <HomePage />;
}
