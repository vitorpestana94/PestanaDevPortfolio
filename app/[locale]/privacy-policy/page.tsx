import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("privacyPolicy.title")}`,
      description: t("privacyPolicy.description"),
   };
}

export default function ChangePassword() {
   return <PrivacyPolicy />;
}
