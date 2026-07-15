import Vitor from "@/components/paragraphs/VitorParagraph";
import Pestana from "@/components/titles/PestanaTitle";
import * as motion from "motion/react-client";

export default function VitorPestanaTextBlock() {
   return (
      <div className="flex flex-col azulPestana leading-none -space-y-1 sm:-space-y-6">
         <Vitor />
         <Pestana />
      </div>
   );
}
