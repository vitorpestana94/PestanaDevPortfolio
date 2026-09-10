import UmPoucoSobreMim from "@/components/titles/AbouTitle";
import Sobre from "@/components/textBlocks/home/AboutFirstTextBlock";
import ProfilePictureMobile from "@components/divs/ProfilePictureDiv.Mobile";

export default function HomeAboutTextDiv() {
   return (
      <div className="flex flex-col justify-between
      w-[95%] items-center
      sm:justify-stretch sm:items-baseline sm:w-[60%] 
      gap-y-10 sm:gap-y-12 xl:gap-y-16 4xl:gap-y-20">
         <UmPoucoSobreMim />
         <ProfilePictureMobile />
         <Sobre />
      </div>
   );
}
