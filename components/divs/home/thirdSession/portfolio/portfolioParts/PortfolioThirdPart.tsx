"use client";

import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";
import Aggregation from "../PortfolioDivText/PortfolioDivAggregation";
import { portfolioDireita } from "@/constants/PortfolioDivsConstants";
import useIsMobile from "@/hooks/useIsMobile";

export default function PortfolioThirdPart() {
  const { isMobile } = useIsMobile();

  return (
    <HomePortfolioDivsGroups
      initial={{ opacity: 0, x: 20 }}
      delay={isMobile ? 1 : 2.5}
    >
      <Aggregation>
        <PortfolioDiv type="link" props={portfolioDireita.advogado} />
        <PortfolioDiv type="gifOrImage" props={portfolioDireita.niteroi} />
      </Aggregation>
      <PortfolioDiv type="gifOrImage" props={portfolioDireita.noiteEstrelada} />
    </HomePortfolioDivsGroups>
  );
}
