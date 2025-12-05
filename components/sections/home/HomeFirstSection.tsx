import VitorPestana from "@/components/textBlocks/VitorPestanaTextBlock";
import Frame from "@/components/divs/FrameDiv";
import FullStackWebDeveloper from "@/components/paragraphs/FullStackWebDeveloperParagraph";

export default function HomeFirstSection() {
  return (
    <section
      className="flex flex-col
      xxs:ml-10
      xs:ml-14 
      ssm:ml-20
      gap-y-8 ml-20 pt-16 pb-16
      sm:ml-34
      md:gap-y-12 md:ml-40 md:pt-30 
      xl:ml-60
      3xl:ml-96
      4xl:ml-[600px]"
    >
      <VitorPestana />
      <Frame>
        <FullStackWebDeveloper />
      </Frame>
    </section>
  );
}
