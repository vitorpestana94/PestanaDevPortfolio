import Header from "@/components/headers/home/HomeHeader";
import FirstSection from "@/components/sections/home/HomeFirstSection";
import FirstSectionBg from "@/components/divs/HomeFirstSectionBgDiv";

export default function Home() {
  return (
    <main className="w-full bg-black flex flex-col relative">
      <FirstSectionBg>
        <Header />
        <FirstSection />
      </FirstSectionBg>
    </main>
  );
}
