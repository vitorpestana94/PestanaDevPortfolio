import ensureAuthenticated from "@/utils/authentication/ensureAuthenticated";
import FirstScrumBoardSection from "../sections/scrumBoard/FirstScrumBoardSection";
import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";

export default async function LastScrumBoardPage() {
   const session = await ensureAuthenticated("scrum-board");
   const locale = await getLocale();

   if (session.lastBoardId) {
      redirect(`/${locale}/scrum-board/${session.lastBoardId}`);
   }

   return <FirstScrumBoardSection />;
}
