import Wrapper from "@/components/wrappers/home/HomeWrapper";
import MeuTrabalho from "@/components/titles/MyWork";
import Portfolio from "@/components/divs/home/thirdSession/HomeMyWorkDiv";

export default function HomeThirdSection() {
  return (
    <section id="meuTrabalho" className="homeSectionMargin">
      <Wrapper className="conteudoWrapper homeMobileDirection ">
        <MeuTrabalho />
        <Portfolio />
      </Wrapper>
    </section>
  );
}
