import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import LoginPage from "@/components/pages/Login";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} login`,
      description: t("auth.description"),
   };
}

export default function Login() {
   return <LoginPage />;
}
