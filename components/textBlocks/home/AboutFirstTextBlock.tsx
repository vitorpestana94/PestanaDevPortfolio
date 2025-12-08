import Frame from "@/components/divs/FrameDiv";
import About from "@/components/paragraphs/AboutParagraph";

export default function AboutFirstTextBlock() {
  return (
    <Frame className="w-[80%] p-8 sm:p-9 sm:w-[70%] xl:w-full xl:p-10">
      <About />
    </Frame>
  );
}
