import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";
import Aggregation from "../PortfolioDivText/PortfolioDivAggregation";

export default function PortfolioSecondPart() {
  return (
    <HomePortfolioDivsGroups>
      <Aggregation>
        <PortfolioDiv
          type="bgColors"
          props={{
            bgColors: ["#008042"],
            size: {
              widthAndHeight: "w-[60%] sm:w-[25%] aspect-1/2",
            },
          }}
        />
        <PortfolioDiv
          type="bgColors"
          props={{
            bgColors: ["#008042"],
            size: {
              widthAndHeight: "flex-1",
            },
          }}
        />
      </Aggregation>
      <PortfolioDiv
        type="bgColors"
        props={{
          bgColors: ["#008042"],
          size: {
            widthAndHeight: "w-full flex-1",
          },
        }}
      />
    </HomePortfolioDivsGroups>
  );
}
