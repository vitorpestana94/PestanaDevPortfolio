import FirstSection from "@/components/sections/home/HomeFirstSection";
import SecondSection from "@/components/sections/home/HomeSecondSection";
import SecondSectionValues from "@/components/sections/home/HomeSecondSection.Values";
import FourthSection from "@/components/sections/home/HomeFourthSection";
import ThirdSection from "../sections/home/HomeThirdSection";
import Main from "../wrappers/MainLayout";
import HomeMarquee from "@/components/marquees/HomeMarquee";

export default function Home() {
   return (
      <Main>
         <FirstSection />
         <HomeMarquee />
         <SecondSection />
         <SecondSectionValues />
         <ThirdSection />
         <FourthSection />
      </Main>
   );
}
