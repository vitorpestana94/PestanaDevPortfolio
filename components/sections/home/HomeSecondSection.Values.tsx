import Wrapper from "@/components/wrappers/home/HomeWrapper";
import SobreSeuZeLeiteiro from "@/components/divs/home/SecondSession/HomeTextAndPicture";
import MyValues from "@/components/titles/MyValuesTitle";

export default function HomeSecondSectionValues() {
   return (
    <section id="meusValores" className="homeSectionMargin relative">
        <Wrapper className="conteudoWrapper">
            <div className="w-full flex flex-col gap-y-15 sm:gap-y-20 xl:gap-y-25">
                <MyValues />
                <SobreSeuZeLeiteiro />
            </div>
        </Wrapper>
    </section>
   );
}