import Banner from "@components/divs/ProfileDivBg/ProfileDivBg";
import DevidedSection from "../DevidedSection";
import EditProfileForm from "@/components/forms/editProfileForm/EditProfileForm";

export default function ProfileSection() {
   return (
      <DevidedSection>
         <Banner />
         <EditProfileForm />
      </DevidedSection>
   );
}
