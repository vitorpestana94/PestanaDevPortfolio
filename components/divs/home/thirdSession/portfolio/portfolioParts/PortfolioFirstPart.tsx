import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";
import { firstPartTopColorDiv, magiPass } from "@/constants/PortfolioDivsData";
import Aggregation from "../PortfolioDivText/PortfolioDivAggregation";

export default function PortfolioFirstPart() {
  return (
    <HomePortfolioDivsGroups>
      <Aggregation>
        <PortfolioDiv type="bgColors" props={firstPartTopColorDiv} />
        <PortfolioDiv type="link" props={magiPass} />
      </Aggregation>
      <Aggregation>
        <PortfolioDiv
          type="gifOrImage"
          props={{
            bgImage:
              "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Y5N2VqbjdiaHduZTlqM2g0Y2RkMzVmd213b2VteWkwa3k2ajlodiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xd7QqFPv4IVAz8dnog/giphy.gif",
            size: {
              widthAndHeight: "w-[65%] aspect-4/2",
            },
          }}
        />
        <PortfolioDiv
          type="bgColors"
          props={{
            bgColors: ["#008042"],
            size: { widthAndHeight: "flex-1" },
          }}
        />
      </Aggregation>
      <PortfolioDiv
        type="gifOrImage"
        props={{
          bgImage:
            "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          size: { widthAndHeight: "flex-1" },
        }}
      />
    </HomePortfolioDivsGroups>
  );
}
