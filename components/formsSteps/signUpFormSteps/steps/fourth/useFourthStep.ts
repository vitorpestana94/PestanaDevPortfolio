"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function useFourthStep() {
  const t = useTranslations("auth.signUp.form.fourthStep");
  const router = useRouter();

  async function redirectToHome(): Promise<void> {
    router.push("/");
  }

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return { t, redirectToHome };
}
