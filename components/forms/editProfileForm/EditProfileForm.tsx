"use client";

import AuthForm from "../AuthForm";
import { useGetUser } from "@/hooks/api/user/queries";

export default function EditProfileForm() {
   const { data } = useGetUser();

   console.log(data);
   return (
      <AuthForm>
         <p>oi</p>
      </AuthForm>
   );
}
