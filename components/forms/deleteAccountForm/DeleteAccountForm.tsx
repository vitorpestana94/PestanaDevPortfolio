"use client";

import AuthForm from "../DevidedDivFormWrapper";
import FormSteps from "@components/formsSteps/deleteAccountFormSteps/DeleteAccountFormSteps";
import useUser from "@/hooks/useUser";

export default function DeleteAccountForm() {
   const { user, isManualUser } = useUser();

   if (!user || !user.email) return null;

   return (
      <AuthForm>
         <FormSteps email={user.email} isManualUser={isManualUser} />
      </AuthForm>
   );
}
