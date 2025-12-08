import Wrapper from "@/components/wrappers/home/HomeWrapper";
import UmPoucoSobreMim from "@/components/textBlocks/home/AboutTextBlock";
import Sobre from "@/components/textBlocks/home/AboutFirstTextBlock";
export default function HomeSecondSection() {
  return (
    <section className="w-full my-20 xl:my-40">
      <Wrapper className="conteudoWrapper sm:w-1/2 xl:w-1/4 space-y-10">
        <UmPoucoSobreMim />
        <Sobre />
      </Wrapper>
    </section>
  );
}
