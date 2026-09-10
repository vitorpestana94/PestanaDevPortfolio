import UmPoucoSobreMim from "@/components/titles/AbouTitle";
import Sobre from "@/components/textBlocks/home/AboutFirstTextBlock";

export default function HomeAboutTextDiv() {
   return (
      <div className="flex flex-col justify-between items-center sm:justify-stretch sm:items-baseline gap-y-10 sm:gap-y-12 xl:gap-y-16 4xl:gap-y-20 sm:w-[60%]">
         <UmPoucoSobreMim />
         <Sobre />
      </div>
   );
}
