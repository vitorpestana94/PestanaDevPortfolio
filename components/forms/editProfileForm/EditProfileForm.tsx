"use client";

import AuthForm from "../DevidedDivFormWrapper";
import FormSteps from "@/components/formsSteps/editProfileForm/EditProfileFormSteps";
import User from "@/models/interfaces/UI/UserInterface";

export default function EditProfileForm({ user }: User) {
   return (
      <AuthForm>
         <FormSteps user={user} />
      </AuthForm>
   );
}
