import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import DeleteAccountPage from "@/components/pages/DeleteAccount";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("profile.title")}`,
      description: t("profile.description"),
   };
}

export default function DeleteAccount() {
   return <DeleteAccountPage />;
}
