import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";

export default function PortfolioSecondPart() {
  return (
    <HomePortfolioDivsGroups>
      <div className="portfolioFlex">
        <PortfolioDiv
          props={{
            bgColor: "bg-white",
            size: {
              widthAndHeight: "w-[40%] h-[230px]",
            },
          }}
        />
        <PortfolioDiv
          props={{
            bgColor: "bg-red-900",
            size: { widthAndHeight: "flex-1 h-[230px]" },
          }}
        />
      </div>
      <PortfolioDiv
        props={{
          bgColor: "bg-white",
          size: {
            widthAndHeight: "w-full h-[170px]",
          },
        }}
      />
    </HomePortfolioDivsGroups>
  );
}
