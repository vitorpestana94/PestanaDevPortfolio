import ensureAuthenticated from "@/utils/authentication/ensureAuthenticated";
import CreateScrumBoardDrawer from "../drawers/createScrumBoardDrawer/CreateScrumBoardDrawer";

export default async function CreateScrumBoardPage() {
   await ensureAuthenticated("scrum-board/create");

   return <CreateScrumBoardDrawer />;
}
