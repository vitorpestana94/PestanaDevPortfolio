import Vitor from "@/components/paragraphs/VitorParagraph";
import Pestana from "@/components/titles/PestanaTitle";
import * as motion from "motion/react-client";

export default function VitorPestanaTextBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5 }}
    >
      <div className="flex flex-col text-[#38b6ff] leading-none -space-y-2 sm:-space-y-6">
        <Vitor />
        <Pestana />
      </div>
    </motion.div>
  );
}
