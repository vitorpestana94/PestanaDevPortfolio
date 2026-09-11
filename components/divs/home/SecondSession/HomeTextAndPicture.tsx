import Sobre from "@/components/paragraphs/PhotoParagraph";
import Foto from "./HomePhotoDiv";
import FotoDoSeuZe from "../homePicture/HomePicture";

export default function HomeTextAndPicture() {
   return (
      <div className="flex flex-col justify-center  items-center gap-y-15 xl:gap-y-0 xl:flex-row xl:w-full relative ">
         <Foto className="w-full sm:w-[80%] xl:w-1/2 order-2 xl:order-1">
            <FotoDoSeuZe />
         </Foto>
         <Sobre />
      </div>
   );
}
