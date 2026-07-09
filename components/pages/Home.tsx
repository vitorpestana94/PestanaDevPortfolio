import FirstSection from "@/components/sections/home/HomeFirstSection";
import SecondSection from "@/components/sections/home/HomeSecondSection";
import ThirdSection from "@/components/sections/home/HomeThirdSection";
import FourthSection from "@/components/sections/home/HomeFourthSection";

export default function Home() {
   return (
      <main className="homeDefault flex flex-col relative">
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
      </main>
   );
}
