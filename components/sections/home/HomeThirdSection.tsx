import MySkills from "@/components/titles/MySkills";
import Skills from "@/components/skills/Skills";
import Wrapper from "@/components/wrappers/home/HomeWrapper";

export default function HomeThirdSection() {
   return (
      <section id="minhasHabilidades" className="homeSectionMargin">
         <Wrapper className="conteudoWrapper homeMobileDirection flex flex-col w-full mb-6 2xl:mb-8 3xl:mb-10">
            <MySkills />
         </Wrapper>
         <Skills />
      </section>
   );
}
