import PrimeiraSessao from "@/components/sections/home/HomeFirstSection";
import SegundaSessao from "@/components/sections/home/HomeSecondSection";
import TerceiraoSessao from "@/components/sections/home/HomeThirdSection";
import QuartaSessao from "@/components/sections/home/HomeFourthSection";

export default function Home() {
  return (
    <main className="w-full bg-black flex flex-col relative h-full">
      <PrimeiraSessao />
      <SegundaSessao />
      <TerceiraoSessao />
      <QuartaSessao />
    </main>
  );
}
