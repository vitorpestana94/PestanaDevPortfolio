import Frame from "@/components/divs/frameDiv/FrameDiv";
import About from "@/components/paragraphs/AboutParagraph";

export default function AboutFirstTextBlock() {
  return (
    <Frame
      props={{
        className: "w-[65%] p-5 sm:p-9 sm:w-[90%] xl:w-full xl:p-10",
        waitIsInView: true,
      }}
    >
      <About />
    </Frame>
  );
}
