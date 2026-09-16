import Wrapper from "@/components/wrappers/home/HomeWrapper";
import SobreMim from "@/components/divs/home/SecondSession/HomeAboutTextDiv";
import ProfilePictureDesktop from "@components/divs/ProfilePictureDiv.DesktopTablet";

export default function HomeSecondSection() {
   return (
      <section id="sobre" className="relative diferentSection min-h-screen">
         <Wrapper className="conteudoWrapper h-full homeMobileDirection xl:flex-row ">
            <SobreMim />
            <ProfilePictureDesktop />
         </Wrapper>
      </section>
   );
}
