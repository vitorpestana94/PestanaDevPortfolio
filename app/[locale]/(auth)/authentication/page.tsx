import AuthPage from "@/components/pages/Auth";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("auth.title")}`,
      description: t("auth.description"),
   };
}

export default async function Auth() {
   return <AuthPage />;
}
