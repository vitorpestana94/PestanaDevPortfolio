"use client";

import PortfolioDiv from "../../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../../portfolioDivsGroups/HomePortfolioDivsGroups";
import { portfolioEsquerda } from "@/constants/PortfolioDivsConstants";
import Aggregation from "../../PortfolioDivText/PortfolioDivAggregation";
import usePortfolioFirstPart from "./usePortfolioFirstPart";

export default function PortfolioFirstPart() {
   const { isMobile, imgText } = usePortfolioFirstPart();
   console.log(imgText.magiPass);
   return (
      <HomePortfolioDivsGroups
         initial={{ opacity: 0, x: -20 }}
         delay={isMobile ? 1 : 2}
      >
         <Aggregation>
            <PortfolioDiv type="bgColors" props={portfolioEsquerda.colorDiv} />
            <PortfolioDiv
               type="gifOrImage"
               props={portfolioEsquerda.buracoNegro}
            />
         </Aggregation>
         <Aggregation>
            <PortfolioDiv
               type="link"
               props={{ ...portfolioEsquerda.saideira, text: imgText.saideira }}
            />
            <PortfolioDiv type="gifOrImage" props={portfolioEsquerda.leao} />
         </Aggregation>
         <PortfolioDiv
            type="link"
            props={{ ...portfolioEsquerda.magiPass, text: imgText.magiPass }}
         />
      </HomePortfolioDivsGroups>
   );
}
