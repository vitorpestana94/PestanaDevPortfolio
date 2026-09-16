import VitorPestana from "@/components/textBlocks/home/VitorPestanaTextBlock";
import FullStackWebDeveloper from "@/components/paragraphs/FullStackWebDeveloperParagraph";
import Presentation from "@/components/paragraphs/PresentationParagraph";
import Links from "@/components/links/HeroLinks";
import * as motion from "motion/react-client";

export default function HomeFirstSectionTextBLock() {
   return (
      <section className="flex flex-col items-center z-50 pointer-events-none">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="space-y-8.5"
         >
            <VitorPestana />
            <FullStackWebDeveloper />
            <Presentation />
            <Links />
         </motion.div>
      </section>
   );
}
