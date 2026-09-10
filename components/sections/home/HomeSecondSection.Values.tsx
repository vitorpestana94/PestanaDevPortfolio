import Wrapper from "@/components/wrappers/home/HomeWrapper";
import SobreSeuZeLeiteiro from "@/components/divs/home/SecondSession/HomeTextAndPicture";
import MyValues from "@/components/titles/MyValuesTitle";

export default function HomeSecondSectionValues() {
   return (
    <section id="meusValores" className="homeSectionMargin relative">
        <Wrapper className="conteudoWrapper space-y-15 sm:space-y-20 xl:space-y-25">
            <MyValues />
            <div className="homeMobileDirection sm:flex-row">
                <SobreSeuZeLeiteiro />
            </div>
        </Wrapper>
    </section>
   );
}