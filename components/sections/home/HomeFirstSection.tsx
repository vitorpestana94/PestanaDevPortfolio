import Header from "@/components/headers/home/HomeHeader";
import VitorPestanaFullStackWebDeveloper from "@/components/textBlocks/home/HomeFirstSectionTextBLock";
import BackGround from "@/components/divs/home/firstSession/HomeFirstSectionBgDiv";
import Wrapper from "@/components/wrappers/home/HomeWrapper";

export default function HomeFirstSection() {
  return (
    <BackGround>
      <Header />
      <Wrapper className="mt-1 sm:mt-8 xl:mt-10 xl:mx-[90px]">
        <VitorPestanaFullStackWebDeveloper />
      </Wrapper>
    </BackGround>
  );
}
