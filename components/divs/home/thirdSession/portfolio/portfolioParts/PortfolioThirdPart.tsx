import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";
import Aggregation from "../PortfolioDivText/PortfolioDivAggregation";

export default function PortfolioThirdPart() {
  return (
    <HomePortfolioDivsGroups>
      <Aggregation>
        <PortfolioDiv
          type="bgColors"
          props={{
            bgColors: ["#008042"],
            size: {
              widthAndHeight: "flex-1",
            },
          }}
        />
        <PortfolioDiv
          type="bgColors"
          props={{
            bgColors: ["#008042"],
            size: {
              widthAndHeight: "w-[35%] aspect-[4/5]",
            },
          }}
        />
      </Aggregation>
      <Aggregation>
        <PortfolioDiv
          type="bgColors"
          props={{
            bgColors: ["#008042"],
            size: {
              widthAndHeight: "flex-1",
            },
          }}
        />
        <PortfolioDiv
          type="bgColors"
          props={{
            bgColors: ["#008042"],
            size: {
              widthAndHeight: "w-[50%] aspect-square",
            },
          }}
        />
      </Aggregation>
    </HomePortfolioDivsGroups>
  );
}
