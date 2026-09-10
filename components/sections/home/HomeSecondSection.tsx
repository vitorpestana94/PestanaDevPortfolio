import Wrapper from "@/components/wrappers/home/HomeWrapper";
import SobreMim from "@/components/divs/home/SecondSession/HomeAboutTextDiv";
import ProfilePicture from "@/components/images/ProfilePicture";
import Photo from "@/components/divs/home/SecondSession/HomePhotoDiv";

export default function HomeSecondSection() {
   return (
      <section id="sobre" className="homeSectionMargin relative">
         <Wrapper className="conteudoWrapper homeMobileDirection sm:flex-row">
            <SobreMim />
            <Photo className="w-[75%] sm:w-[25%] self-center mx-auto">
               <ProfilePicture />
            </Photo>
         </Wrapper>
      </section>
   );
}
