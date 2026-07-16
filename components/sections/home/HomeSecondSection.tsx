import Wrapper from "@/components/wrappers/home/HomeWrapper";
import SobreMim from "@/components/divs/home/SecondSession/HomeAboutTextDiv";
import SobreSeuZeLeiteiro from "@/components/divs/home/SecondSession/HomeTextAndPicture";

export default function HomeSecondSection() {
   return (
      <section id="sobre" className="homeSectionMargin relative">
         <Wrapper className="conteudoWrapper homeMobileDirection sm:flex-row">
            <SobreMim />
            <SobreSeuZeLeiteiro />
         </Wrapper>
      </section>
   );
}
