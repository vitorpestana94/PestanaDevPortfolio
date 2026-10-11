import ensureAuthenticated from "@/utils/authentication/ensureAuthenticated";
import ScrumBoardSection from "../sections/scrumBoard/ScrumBoardSection";

export default async function ScrumBoardPage({ boardId }: { boardId: string }) {
   await ensureAuthenticated(`scrum-board/${boardId}`);

   return <ScrumBoardSection boardId={boardId} />;
}
