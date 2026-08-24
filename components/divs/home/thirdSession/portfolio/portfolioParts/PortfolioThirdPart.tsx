"use client";

import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";
import Aggregation from "../PortfolioDivText/PortfolioDivAggregation";
import { portfolioDireita } from "@/constants/PortfolioDivsConstants";
import useIsMobile from "@/hooks/useIsMobile";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function PortfolioThirdPart() {
  const { isMobile } = useIsMobile();
  const locale = useLocale();
  const t = useTranslations("home.terceiraSessao.imgs")

  return (
    <HomePortfolioDivsGroups
      initial={{ opacity: 0, x: 20 }}
      delay={isMobile ? 1 : 2.5}
    >
      <Aggregation>
        <PortfolioDiv type="link" props={{...portfolioDireita.artExhibition, 
          text: t("artExhibiton.text"),
          title: t("artExhibiton.title"), 
          picture: {
            ...portfolioDireita.artExhibition.picture, 
            routeOrSiteUrl: `./${locale}/art-exhibition`
          }
        }} />
        <PortfolioDiv type="gifOrImage" props={portfolioDireita.niteroi} />
      </Aggregation>
      <PortfolioDiv type="gifOrImage" props={portfolioDireita.noiteEstrelada} />
    </HomePortfolioDivsGroups>
  );
}
