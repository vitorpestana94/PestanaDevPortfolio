import PrimeiraParte from "./portfolio/portfolioParts/PortfolioFirstPart";
import SegundaParte from "./portfolio/portfolioParts/PortfolioSecondPart";
import TerceiraParte from "./portfolio/portfolioParts/PortfolioThirdPart";

export default function HomeMyWorkDiv() {
  return (
    <div className="flex w-full py-16 sm:py-24 xl:py-32">
      <PrimeiraParte />
      <SegundaParte />
      <TerceiraParte />
    </div>
  );
}
