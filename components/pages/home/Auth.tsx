import SignInOrUp from "@/components/sections/AuthSection/AuthSection";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations(`metaData.auth`);

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AuthPage() {
  return (
    <main className="homeDefault z-0 flex lg:p-10">
      <SignInOrUp />
    </main>
  );
}
