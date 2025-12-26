import PrimeiraSessao from "@/components/sections/home/HomeFirstSection";
import SegundaSessao from "@/components/sections/home/HomeSecondSection";
import TerceiraoSessao from "@/components/sections/home/HomeThirdSection";
import QuartaSessao from "@/components/sections/home/HomeFourthSection";

export default function Home() {
  return (
    <main className="homeDefault flex flex-col relative">
      <PrimeiraSessao />
      <SegundaSessao />
      <TerceiraoSessao />
      <QuartaSessao />
    </main>
  );
}
