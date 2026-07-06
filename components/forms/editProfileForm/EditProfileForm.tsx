"use client";

import AuthForm from "../DevidedDivFormWrapper";
import FormSteps from "@/components/formsSteps/editProfileForm/EditProfileFormSteps";
import { useGetUser } from "@/hooks/api/user/queries";

export default function EditProfileForm() {
   const { data: user } = useGetUser();

   if (!user) return;

   return (
      <AuthForm>
         <FormSteps user={user} />
      </AuthForm>
   );
}
