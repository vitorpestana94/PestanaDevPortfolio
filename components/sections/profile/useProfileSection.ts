"use client";

import { useGetUser } from "@/hooks/api/user/queries";
import { useState } from "react";

export const show = "show";
export const edit = "edit";
export const credentials = "credentials";
export const deleteAccount = "deleteAccount";

export type FormType =
   | typeof show
   | typeof edit
   | typeof deleteAccount
   | typeof credentials;

export default function useProfileSection() {
   const { data, isLoading, isError } = useGetUser();
   const [formType, setFormType] = useState<FormType>(show);

   function switchFormType(formType: FormType) {
      setFormType(formType);
   }

   return {
      formType,
      data,
      isLoading,
      isError,
      shoulShowChangePassword: data?.registerType === "Manual",
      switchFormType,
   };
}
