import Wrapper from "@/components/wrappers/home/HomeWrapper";
import SobreMim from "@/components/divs/home/firstSession/HomeAboutTextDiv";
import MaisSobreMim from "@/components/divs/home/firstSession/HomeTextAndPicture";

export default function HomeSecondSection() {
  return (
    <section id="sobre" className="relative w-full my-20 xl:my-40">
      <Wrapper className="conteudoWrapper flex flex-col justify-between gap-y-16 sm:flex-row sm:gap-y-0">
        <SobreMim />
        <MaisSobreMim />
      </Wrapper>
    </section>
  );
}
