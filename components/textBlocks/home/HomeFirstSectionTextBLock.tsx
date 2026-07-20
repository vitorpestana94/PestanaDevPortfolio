import VitorPestana from "@/components/textBlocks/home/VitorPestanaTextBlock";
import Frame from "@/components/divs/frameDiv/FrameDiv";
import FullStackWebDeveloper from "@/components/paragraphs/FullStackWebDeveloperParagraph";
import * as motion from "motion/react-client";

export default function HomeFirstSectionTextBLock() {
   return (
      <section className="flex flex-col font-abril items-center z-50 pointer-events-none">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="blurBg rounded-3xl p-5 xl:p-11 space-y-5"
         >
            <VitorPestana />
            <Frame
               props={{
                  className: "w-25 sm:w-35 xl:w-45 3xl:w-50 4xl:w-65",
               }}
            >
               <FullStackWebDeveloper />
            </Frame>
         </motion.div>
      </section>
   );
}
