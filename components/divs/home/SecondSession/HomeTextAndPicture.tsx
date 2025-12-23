import Sobre from "@/components/paragraphs/PhotoParagraph";
import SeuZeLeiteiro from "./HomePhotoDiv";

export default function HomeTextAndPicture() {
  return (
    <div className="flex flex-col gap-y-20 justify-between sm:w-[60%] relative">
      <Sobre />
      <SeuZeLeiteiro />
    </div>
  );
}
