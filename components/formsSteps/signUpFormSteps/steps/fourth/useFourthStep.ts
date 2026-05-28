"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function useFourthStep(isForgotPassword?: boolean) {
   const t = useTranslations("auth.signUp.form.fourthStep");
   const router = useRouter();

   async function redirectToHome(): Promise<void> {
      router.push("/");
   }

   return { t, redirectToHome };
}
