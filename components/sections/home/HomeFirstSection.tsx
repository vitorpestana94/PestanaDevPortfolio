import VpSobreMeuTrabalhoSocialMedia from "@/components/headers/home/HomeHeader";
import VitorPestanaFullStackWebDeveloper from "@/components/textBlocks/home/HomeFirstSectionTextBLock";
import BackGround from "@/components/divs/HomeFirstSectionBgDiv";
import Wrapper from "@/components/wrappers/home/HomeWrapper";

export default function HomeFirstSection() {
  return (
    <div className="sm:mt-20">
      <BackGround>
        <Wrapper specificStyle="mt-16 sm:mt-20">
          <VpSobreMeuTrabalhoSocialMedia />
          <VitorPestanaFullStackWebDeveloper />
        </Wrapper>
      </BackGround>
    </div>
  );
}
