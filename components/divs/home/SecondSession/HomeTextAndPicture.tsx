import Sobre from "@/components/paragraphs/PhotoParagraph";
import Foto from "./HomePhotoDiv";
import FotoDoSeuZe from "./HomePicture";

export default function HomeTextAndPicture() {
   return (
      <div className="flex flex-col gap-y-15 sm:gap-y-0 sm:flex-row relative w-[75%] sm:w-full">
         <Foto className="w-full sm:w-1/2 order-2 sm:order-1">
            <FotoDoSeuZe />
         </Foto>
         <Sobre />
      </div>
   );
}
