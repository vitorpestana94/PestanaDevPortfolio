import UmPoucoSobreMim from "@/components/textBlocks/home/AboutTextBlock";
import Sobre from "@/components/textBlocks/home/AboutFirstTextBlock";

export default function HomeAboutTextDiv() {
  return (
    <div className="flex flex-col justify-between items-center sm:justify-stretch sm:items-baseline gap-y-10 sm:gap-y-12 xl:gap-y-16 sm:w-[50%] xl:w-[40%] 2xl:w-[30%]">
      <UmPoucoSobreMim />
      <Sobre />
    </div>
  );
}
