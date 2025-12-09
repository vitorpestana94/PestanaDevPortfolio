import PrimeiraSessao from "@/components/sections/home/HomeFirstSection";
import SegundaSessao from "@/components/sections/home/HomeSecondSection";
import TerceiraoSessao from "@/components/sections/home/HomeThirdSection";

export default function Home() {
  return (
    <main className="w-full bg-black flex flex-col relative">
      <PrimeiraSessao />
      <SegundaSessao />
      <TerceiraoSessao />
    </main>
  );
}
