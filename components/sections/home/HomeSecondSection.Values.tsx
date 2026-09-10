import Wrapper from "@/components/wrappers/home/HomeWrapper";
import SobreSeuZeLeiteiro from "@/components/divs/home/SecondSession/HomeTextAndPicture";

export default function HomeSecondSectionValues() {
   return (
    <section id="valores" className="homeSectionMargin relative">
        <Wrapper className="conteudoWrapper homeMobileDirection sm:flex-row">
            <SobreSeuZeLeiteiro />
        </Wrapper>
    </section>
   );
}