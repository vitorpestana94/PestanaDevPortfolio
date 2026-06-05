import Interface from "./DivBgInterface";
import Text from "../../textBlocks/authTextBlock/AuthTextBlock";
import { useTranslations } from "next-intl";

export default function DivBg({ bgUrl, text }: Interface) {
   return (
      <div className="flex-1 lg:relative">
         <div
            className={`absolute opacity-70 z-0 inset-0 bg-no-repeat bg-cover bg-center`}
            style={{
               backgroundImage: `url(${bgUrl})`,
            }}
         />
         <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <Text
               props={{
                  title: text.title,
                  paragraph: text.paragraph,
               }}
            />
         </div>
      </div>
   );
}
