import MySkills from "@/components/titles/MySkills";
import Skills from "@/components/skills/Skills";
import Wrapper from "@/components/wrappers/home/HomeWrapper";

export default function HomeThirdSection() {
   return (
      <section id="minhasHabilidades" className="homeSectionMargin diferentSection">
         <Wrapper className="conteudoWrapper homeMobileDirection">
            <MySkills />
         </Wrapper>
         <Skills />
      </section>
   );
}
