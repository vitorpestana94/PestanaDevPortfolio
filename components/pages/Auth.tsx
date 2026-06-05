import SignInOrUp from "@/components/sections/Auth/AuthSection";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Main from "../mains/DevidedMain";

export async function generateMetadata(): Promise<Metadata> {
   const t = await getTranslations(`metaData.auth`);

   return {
      title: t("title"),
      description: t("description"),
   };
}

export default function AuthPage() {
   return (
      <Main>
         <SignInOrUp />
      </Main>
   );
}
