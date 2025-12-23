"use client";

import Wrapper from "@/components/wrappers/home/HomeWrapper";
import SobreMim from "@/components/divs/home/SecondSession/HomeAboutTextDiv";
import SobreSeuZeLeiteiro from "@/components/divs/home/SecondSession/HomeTextAndPicture";
import QuadradoAzul from "@/components/divs/home/SecondSession/HomeBlueDiv";
import useIsMobile from "@/hooks/useIsMobile";

export default function HomeSecondSection() {
  const { isMobile } = useIsMobile();

  return (
    <section id="sobre" className="relative homeSectionMargin">
      <Wrapper className="conteudoWrapper homeMobileDirection sm:flex-row">
        <SobreMim />
        <SobreSeuZeLeiteiro />
      </Wrapper>
      {!isMobile && <QuadradoAzul />}
    </section>
  );
}
