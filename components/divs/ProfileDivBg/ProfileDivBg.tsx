import Text from "../../textBlocks/authTextBlock/AuthTextBlock";
import options from "../../../options.json";
import useProfileDivBg from "./useProfileDivBg";

export default function ProfileDivBg() {
   const { t } = useProfileDivBg();

   return (
      <div className="flex-1 lg:relative">
         <div
            className={`absolute opacity-70 z-0 inset-0 bg-no-repeat bg-cover bg-center`}
            style={{
               backgroundImage: `url(${options.backgroundImages.authBanner})`,
            }}
         />
         <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <Text
               props={{
                  title: t(`auth.flow.banner.title`),
                  paragraph: t(`auth.flow.banner.paragraph`),
               }}
            />
         </div>
      </div>
   );
}
