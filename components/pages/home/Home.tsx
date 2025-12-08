import PrimeiraSessao from "@/components/sections/home/HomeFirstSection";
import SegundaSessao from "@/components/sections/home/HomeSecondSection";

export default function Home() {
  return (
    <main className="w-full bg-black flex flex-col">
      <PrimeiraSessao />
      <SegundaSessao />
    </main>
  );
}
