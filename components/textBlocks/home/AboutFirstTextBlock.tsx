import Frame from "@/components/divs/frameDiv/FrameDiv";
import About from "@/components/paragraphs/AboutParagraph";
import CoreTechStack from "@/components/spans/CoreTechStackSpan";

export default function AboutFirstTextBlock() {
   return (
      <Frame
         props={{
            className:
               "w-[80%] p-5 sm:p-9 sm:w-[90%] xl:w-full xl:p-8 4xl:p-10 flex flex-col gap-y-5",
            waitIsInView: true,
         }}
      >
         <About />
         <CoreTechStack />
      </Frame>
   );
}
