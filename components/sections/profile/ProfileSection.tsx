"use client";

import Banner from "@components/divs/ProfileDivBg/ProfileDivBg";
import DevidedSection from "../DevidedSection";
import EditProfileForm from "@/components/forms/editProfileForm/EditProfileForm";
import useProfileSection from "./useProfileSection";
import Navigation from "@/components/spans/ProfileNavigationSpan";
import Profile from "@/components/divs/ProfileDataDiv/ProfileDataDiv";
import DeleteAccountForm from "@/components/forms/deleteAccountForm/DeleteAccountForm";
import ChangePasswordForm from "@/components/forms/changePasswordForm/ChangePasswordForm";
import Script from "next/script";

if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
   throw Error("BUILD ERROR: RECAPTCHA PUBLIC KEY NOT SETTED");
}

export default function ProfileSection() {
   const {
      data,
      isLoading,
      formType,
      shoulShowChangePassword,
      switchFormType,
   } = useProfileSection();

   if (!data) return;

   function getForm() {
      const form = {
         show: <Profile user={data!} />,
         edit: <EditProfileForm user={data!} />,
         credentials: <ChangePasswordForm user={data!} />,
         deleteAccount: <DeleteAccountForm user={data!} />,
      };

      return form[formType];
   }

   return (
      <DevidedSection>
         <Banner formType={formType} />
         <Navigation
            formType={formType}
            shoulShowChangePassword={shoulShowChangePassword}
            switchFormType={switchFormType}
         />
         {getForm()}
         <Script
            strategy="afterInteractive"
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
         />
      </DevidedSection>
   );
}
