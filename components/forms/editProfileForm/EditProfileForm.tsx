"use client";

import AuthForm from "../DevidedDivFormWrapper";
import FormSteps from "@/components/formsSteps/editProfileForm/EditProfileFormSteps";
import useGetManualUser from "@/hooks/useGetManualUser";

export default function EditProfileForm() {
   const { user } = useGetManualUser();

   if (!user) return null;

   return (
      <AuthForm>
         <FormSteps user={user} />
      </AuthForm>
   );
}
