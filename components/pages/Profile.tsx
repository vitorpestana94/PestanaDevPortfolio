import AuthPage from "../wrappers/AuthPage";

import Profile from "@/components/divs/ProfileDataDiv/ProfileDataDiv";

export default async function ProfilePage() {
   return (
      <AuthPage>
         <Profile />
      </AuthPage>
   );
}
