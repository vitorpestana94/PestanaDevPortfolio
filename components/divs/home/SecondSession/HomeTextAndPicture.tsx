import Sobre from "@/components/paragraphs/PhotoParagraph";
import Foto from "./HomePhotoDiv";
import FotoDoSeuZe from "./HomePicture";

export default function HomeTextAndPicture() {
   return (
      <div className="flex relative">
         <Foto className="w-1/2">
            <FotoDoSeuZe />
         </Foto>
         <Sobre />
      </div>
   );
}
