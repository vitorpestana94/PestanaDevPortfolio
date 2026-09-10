import Wrapper from "@/components/wrappers/home/HomeWrapper";
import SobreMim from "@/components/divs/home/SecondSession/HomeAboutTextDiv";
import ProfilePictureDesktop from "@components/divs/ProfilePictureDiv.DesktopTablet";
import UmPoucoSobreMim from "@/components/titles/AbouTitle";

export default function HomeSecondSection() {
   return (
      <section id="sobre" className="homeSectionMargin relative">
         <Wrapper className="conteudoWrapper homeMobileDirection sm:flex-row">
            <SobreMim />
            <ProfilePictureDesktop />
         </Wrapper>
      </section>
   );
}
