"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import useLocalePath from "@/hooks/useLocalePath";
export default function SiteNavigationSpan() {
  const t = useTranslations("home.header");
  const { path } = useLocalePath("auth");

  return (
    <span
      className="flex text-[#bfbfbf]
        text-[0.75rem] flex-col gap-y-4 items-center
        sm:flex-row sm:gap-x-4 sm:gap-y-0
        md:text-[1rem]
        xl:text-[1.25rem] xl:gap-x-5
        3xl:text-[1.625rem] 3xl:gap-x-8
        4xl:text-[2rem] 4xl:gap-x-10"
    >
      <Link className="hoverPestana" href={"#sobre"}>
        {t("sobre")}
      </Link>
      <Link className="hoverPestana" href={"#meuTrabalho"}>
        {t("meuTrabalho")}
      </Link>
      <Link className="hoverPestana" href={path}>
        {t("logar")}
      </Link>
    </span>
  );
}
