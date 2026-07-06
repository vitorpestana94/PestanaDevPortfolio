import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import EditPage from "@/components/pages/Edit";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("auth.signUp")}`,
      description: t("auth.description.signUp"),
   };
}

export default function Edit() {
   return <EditPage />;
}
