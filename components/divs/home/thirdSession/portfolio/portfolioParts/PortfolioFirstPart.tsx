"use client";

import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";
import { portfolioEsquerda } from "@/constants/PortfolioDivsConstants";
import Aggregation from "../PortfolioDivText/PortfolioDivAggregation";
import useIsMobile from "@/hooks/useIsMobile";

export default function PortfolioFirstPart() {
  const { isMobile } = useIsMobile();

  return (
    <HomePortfolioDivsGroups
      initial={{ opacity: 0, x: -20 }}
      delay={isMobile ? 1 : 2}
    >
      <Aggregation>
        <PortfolioDiv type="bgColors" props={portfolioEsquerda.colorDiv} />
        <PortfolioDiv type="link" props={portfolioEsquerda.magiPass} />
      </Aggregation>
      <Aggregation>
        <PortfolioDiv type="link" props={portfolioEsquerda.dentista} />
        <PortfolioDiv type="gifOrImage" props={portfolioEsquerda.leao} />
      </Aggregation>
      <PortfolioDiv type="gifOrImage" props={portfolioEsquerda.buracoNegro} />
    </HomePortfolioDivsGroups>
  );
}
