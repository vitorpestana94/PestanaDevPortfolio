import AuthenticatedPage from "../wrappers/AuthenticatedPage";
import Profile from "@/components/divs/ProfileDataDiv/ProfileDataDiv";

export default async function ProfilePage() {
   return (
      <AuthenticatedPage>
         <Profile />
      </AuthenticatedPage>
   );
}
