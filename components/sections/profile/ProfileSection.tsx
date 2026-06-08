"use client";

import Banner from "@components/divs/ProfileDivBg/ProfileDivBg";
import DevidedSection from "../DevidedSection";
import EditProfileForm from "@/components/forms/editProfileForm/EditProfileForm";
import useProfileSection from "./useProfileSection";
import Navigation from "@/components/spans/ProfileNavigationSpan";
import ProfileDiv from "@/components/divs/ProfileDiv";
import DeleteAccountForm from "@/components/forms/deleteAccountForm/DeleteAccountForm";
import ChangePasswordForm from "@/components/forms/changePasswordForm/ChangePasswordForm";

export default function ProfileSection() {
   const {
      data,
      isLoading,
      isError,
      formType,
      shoulShowChangePassword,
      switchFormType,
   } = useProfileSection();

   function getForm() {
      const form = {
         show: <ProfileDiv user={data!} />,
         edit: <EditProfileForm />,
         deleteAccount: <DeleteAccountForm />,
         credentials: <ChangePasswordForm />,
      };

      return form[formType];
   }

   return (
      <DevidedSection>
         <Banner />
         <Navigation
            formType={formType}
            shoulShowChangePassword={shoulShowChangePassword}
            switchFormType={switchFormType}
         />
         {getForm()}
      </DevidedSection>
   );
}
