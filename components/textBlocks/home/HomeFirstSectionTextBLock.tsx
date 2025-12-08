import VitorPestana from "@/components/textBlocks/home/VitorPestanaTextBlock";
import Frame from "@/components/divs/frameDiv/FrameDiv";
import FullStackWebDeveloper from "@/components/paragraphs/FullStackWebDeveloperParagraph";

export default function HomeFirstSectionTextBLock() {
  return (
    <section
      className="flex flex-col
      xxs:ml-10
      xs:ml-14 
      ssm:ml-20
      gap-y-8 ml-20 pt-16 pb-5
      sm:ml-34 sm:pb-7
      md:gap-y-12 md:ml-40 md:pt-24 md:pb-10
      xl:ml-60 xl:pb-24
      3xl:ml-96
      4xl:ml-[600px]"
    >
      <VitorPestana />
      <Frame
        props={{
          className: "w-[35%] sm:w-[22%] xl:w-[18%] 3xl:w-[14%] 4xl:w-[12%]",
        }}
      >
        <FullStackWebDeveloper />
      </Frame>
    </section>
  );
}
