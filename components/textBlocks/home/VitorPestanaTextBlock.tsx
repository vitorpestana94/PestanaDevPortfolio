import Vitor from "@/components/paragraphs/VitorParagraph";
import Pestana from "@/components/titles/PestanaTitle";
import HiIm from "@/components/paragraphs/HiImParagraph";

export default function VitorPestanaTextBlock() {
   return (
      <div className="flex flex-col gap-y-3 azulPestana leading-none self-center">
         <HiIm />
         <div className="flex flex-col -space-y-1 sm:-space-y-4">
            <Vitor />
            <Pestana />
         </div>
      </div>
   );
}
