import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import ForgotPasswordPage from "@/components/pages/ForgotPassword";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} ${t("auth.forgotPassword")}`,
      description: t("auth.description.forgotPassword"),
   };
}

export default function Login() {
   return <ForgotPasswordPage />;
}
