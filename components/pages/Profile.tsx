import ProfileSection from "../sections/profile/ProfileSection";
import Main from "../mains/DevidedMain";
import ensureAuthenticated from "@/utils/authentication/ensureAuthenticated";

export default async function Profile() {
   await ensureAuthenticated();

   return (
      <Main>
         <ProfileSection />
      </Main>
   );
}
