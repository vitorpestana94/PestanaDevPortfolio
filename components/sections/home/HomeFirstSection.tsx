import Header from "@/components/headers/home/HomeHeader";
import VitorPestanaFullStackWebDeveloper from "@/components/textBlocks/home/HomeFirstSectionTextBLock";
import BackGround from "@/components/divs/home/firstSession/HomeFirstSectionBgDiv";
import Wrapper from "@/components/wrappers/home/HomeWrapper";

export default function HomeFirstSection() {
      throw Error()
   return (
      <BackGround>
         <Header />
         <Wrapper className="mt-5 sm:mt-16 xl:mt-30 xl:mx-22.5 ">
            <VitorPestanaFullStackWebDeveloper />
         </Wrapper>
      </BackGround>
   );
}
