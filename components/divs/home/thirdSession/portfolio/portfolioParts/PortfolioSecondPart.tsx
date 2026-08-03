"use client";

import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";
import Aggregation from "../PortfolioDivText/PortfolioDivAggregation";
import { portfolioMeio } from "@/constants/PortfolioDivsConstants";
import useIsMobile from "@/hooks/useIsMobile";
import { useTranslations } from "next-intl";

export default function PortfolioSecondPart() {
  const { isMobile } = useIsMobile();
   const t = useTranslations("home.terceiraSessao.imgs");

  return (
    <HomePortfolioDivsGroups
      initial={{ opacity: 0, y: -20 }}
      delay={isMobile ? 1 : 3}
    >
      <Aggregation>
        <PortfolioDiv type="gifOrImage" props={portfolioMeio.gif} />
        <PortfolioDiv type="link" props={portfolioMeio.casamento} />
      </Aggregation>
      <PortfolioDiv type="link"  props={{ ...portfolioMeio.nasa, text: t("nasa") }} />
    </HomePortfolioDivsGroups>
  );
}
