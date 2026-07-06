"use client";

import AuthForm from "../DevidedDivFormWrapper";
import { useGetUser } from "@/hooks/api/user/queries";
import FormSteps from "@/components/formsSteps/changePasswordForm/ChangePasswordFormSteps";

export default function ChangePasswordForm() {
   const { data: user } = useGetUser();

   if (!user) return;

   return (
      <AuthForm>
         <FormSteps user={user} />
      </AuthForm>
   );
}
