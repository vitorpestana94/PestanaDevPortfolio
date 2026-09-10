"use client";

import { useTranslations } from "next-intl";
import HomeTitle from "./HomeTitle";
import useIsMobile from "@/hooks/useIsMobile";

export default function MyWork() {
  const t = useTranslations("home.terceiraSessao");
  const { isMobile } = useIsMobile();

  return (
    <HomeTitle>
      <h2 className="azulPestana homeSubTitle">{t("titulo")}</h2>
      <p className="subTitleParagraph">{isMobile ? t("subTituloMobile") : t("subTituloDesktop")}</p>
    </HomeTitle>
  );
}
