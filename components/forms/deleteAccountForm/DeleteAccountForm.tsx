"use client";

import AuthForm from "../DevidedDivFormWrapper";
import FormSteps from "@components/formsSteps/deleteAccountFormSteps/DeleteAccountFormSteps";
import User from "@/models/interfaces/UI/UserInterface";

export default function DeleteAccountForm({ user }: User) {
   return (
      <AuthForm>
         <FormSteps user={user} />
      </AuthForm>
   );
}
