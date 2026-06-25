"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function useFourthStep(isForgotPassword?: boolean) {
   const locale = useLocale();
   const t = useTranslations(
      `auth.${isForgotPassword ? "forgotPassword" : "signUp"}.form.fourthStep`,
   );
   const router = useRouter();

   async function redirect(): Promise<void> {
      if (isForgotPassword) {
         router.push(`${locale}/authentication/login`);
      } else {
         router.push("/");
      }
   }

   return { t, redirect };
}
