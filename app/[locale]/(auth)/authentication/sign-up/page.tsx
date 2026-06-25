import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { title } from "@/constants/metaData";
import SignUpPage from "@/components/pages/SignUp";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData`);

   return {
      title: `${title} sign-up`,
      description: t("auth.description"),
   };
}

export default function SignUp() {
   return <SignUpPage />;
}
