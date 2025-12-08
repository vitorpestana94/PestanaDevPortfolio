import VpSobreMeuTrabalhoSocialMedia from "@/components/headers/home/HomeHeader";
import VitorPestanaFullStackWebDeveloper from "@/components/textBlocks/home/HomeFirstSectionTextBLock";
import BackGround from "@/components/divs/HomeFirstSectionBgDiv";
import Wrapper from "@/components/wrappers/home/HomeWrapper";

export default function HomeFirstSection() {
  return (
    <BackGround>
      <Wrapper className="mt-16 sm:mt-20 xl:mt-40 xl:mx-[90px]">
        <VpSobreMeuTrabalhoSocialMedia />
        <VitorPestanaFullStackWebDeveloper />
      </Wrapper>
    </BackGround>
  );
}
