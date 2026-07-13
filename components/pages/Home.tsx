import FirstSection from "@/components/sections/home/HomeFirstSection";
import SecondSection from "@/components/sections/home/HomeSecondSection";
import FourthSection from "@/components/sections/home/HomeFourthSection";
import ThirdSection from "../sections/home/HomeThirdSection";
import LastSection from "@/components/sections/home/HomeLastSection";

export default function Home() {
   return (
      <main className="homeDefault flex flex-col relative">
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
         <LastSection />
      </main>
   );
}
