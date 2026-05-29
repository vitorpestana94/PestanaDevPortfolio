"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function useFourthStep(
   isForgotPassword?: boolean,
   switchBackToLogin?: () => void,
) {
   const t = useTranslations(
      `auth.${isForgotPassword ? "forgotPassword" : "signUp"}.form.fourthStep`,
   );
   const router = useRouter();

   async function redirect(): Promise<void> {
      if (switchBackToLogin) {
         switchBackToLogin();
      } else {
         router.push("/");
      }
   }

   return { t, redirect };
}
