import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import TermsAndConditions from "@/components/pages/TermsAndConditions";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("termsAndConditions.title")}`,
      description: t("termsAndConditions.description"),
   };
}

export default function ChangePassword() {
   return <TermsAndConditions />;
}
