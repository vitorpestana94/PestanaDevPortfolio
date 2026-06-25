import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import ForgotPasswordPage from "@/components/pages/ForgotPassword";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} forgot-password`,
      description: t("auth.description"),
   };
}

export default function Login() {
   return <ForgotPasswordPage />;
}
