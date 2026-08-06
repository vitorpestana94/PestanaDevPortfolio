import FirstSection from "@/components/sections/home/HomeFirstSection";
import SecondSection from "@/components/sections/home/HomeSecondSection";
import FourthSection from "@/components/sections/home/HomeFourthSection";
import ThirdSection from "../sections/home/HomeThirdSection";
import Main from "../wrappers/MainLayout";

export default function Home() {
   return (
      <Main>
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
      </Main>
   );
}
