import PrimeiraParte from "./portfolio/portfolioParts/first/PortfolioFirstPart";
import SegundaParte from "./portfolio/portfolioParts/PortfolioSecondPart";
import TerceiraParte from "./portfolio/portfolioParts/PortfolioThirdPart";

export default function HomeMyWorkDiv() {
   return (
      <div className="flex flex-col sm:flex-row w-full py-10 sm:py-12 xl:py-13.5 2xl:py-15">
         <PrimeiraParte />
         <SegundaParte />
         <TerceiraParte />
      </div>
   );
}
