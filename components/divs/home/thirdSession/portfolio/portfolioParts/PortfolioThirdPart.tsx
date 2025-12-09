import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";

export default function PortfolioThirdPart() {
  return (
    <HomePortfolioDivsGroups>
      <div className="portfolioFlex">
        <PortfolioDiv
          props={{
            bgColor: "bg-white",
            size: {
              widthAndHeight: "w-[35%] h-[200px]",
            },
          }}
        />
        <PortfolioDiv
          props={{
            bgColor: "bg-red-900",
            size: { widthAndHeight: "flex-1 h-[200px]" },
          }}
        />
      </div>
      <div className="portfolioFlex">
        <PortfolioDiv
          props={{
            bgColor: "bg-red-900",
            size: { widthAndHeight: "flex-1 h-[200px]" },
          }}
        />
        <PortfolioDiv
          props={{
            bgColor: "bg-white",
            size: {
              widthAndHeight: "w-[27%] h-[200px]",
            },
          }}
        />
      </div>
    </HomePortfolioDivsGroups>
  );
}
