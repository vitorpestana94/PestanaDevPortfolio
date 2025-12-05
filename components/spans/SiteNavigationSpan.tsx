"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SiteNavigationSpan() {
  const t = useTranslations("home.header");

  return (
    <span
      className="flex text-[#bfbfbf]
        text-[0.75rem] flex-col gap-y-4 items-center
        md:text-[1rem] sm:flex-row sm:gap-x-2 sm:gap-y-0
        xl:text-[1.25rem] xl:gap-x-4
        3xl:text-[1.625rem] 3xl:gap-x-8
        4xl:text-[2rem] 4xl:gap-x-10"
    >
      <Link href={"#sobre"}>{t("sobre")}</Link>
      <Link href={"#meuTrabalho"}>{t("meuTrabalho")}</Link>
    </span>
  );
}
