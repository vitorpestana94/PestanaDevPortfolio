import Vitor from "../paragraphs/VitorParagraph";
import Pestana from "../titles/PestanaTitle";

export default function VitorPestanaTextBlock() {
  return (
    <div className="flex flex-col text-[#38b6ff] leading-none -space-y-2 sm:-space-y-6">
      <Vitor />
      <Pestana />
    </div>
  );
}
