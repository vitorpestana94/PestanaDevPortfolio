import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import ChangePasswordPage from "@/components/pages/ChangePassword";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("changePassword.title")}`,
      description: t("changePassword.description"),
   };
}

export default function ChangePassword() {
   return <ChangePasswordPage />;
}
