"use client";

import AuthForm from "../DevidedDivFormWrapper";
import FormSteps from "@components/formsSteps/deleteAccountFormSteps/DeleteAccountFormSteps";
import { useGetUser } from "@/hooks/api/user/queries";

export default function DeleteAccountForm() {
   const { data: user } = useGetUser();

   if (!user) return null;

   return (
      <AuthForm>
         <FormSteps user={user} />
      </AuthForm>
   );
}
