import PortfolioDiv from "../portfolioDiv/HomePortfolioDiv";
import HomePortfolioDivsGroups from "../portfolioDivsGroups/HomePortfolioDivsGroups";

export default function PortfolioFirstPart() {
  return (
    <HomePortfolioDivsGroups>
      <div className="portfolioFlex">
        <PortfolioDiv
          props={{
            bgColor: "bg-[#008042]",
            size: {
              widthAndHeight: "w-[27%] h-[150px]",
            },
          }}
        />
        <PortfolioDiv
          props={{
            picture: {
              pictureUrl: "magipass",
              routeOrSiteUrl: "https://www.magipass.com/en",
            },
            size: { widthAndHeight: "flex-1 h-[150px]" },
          }}
        />
      </div>
      <div className="portfolioFlex">
        <PortfolioDiv
          props={{
            bgColor: "bg-white",
            size: {
              widthAndHeight: "w-[50%] h-[250px]",
            },
          }}
        />
        <PortfolioDiv
          props={{
            bgColor: "bg-red-900",
            size: { widthAndHeight: "flex-1 h-[250px]" },
          }}
        />
      </div>
    </HomePortfolioDivsGroups>
  );
}
