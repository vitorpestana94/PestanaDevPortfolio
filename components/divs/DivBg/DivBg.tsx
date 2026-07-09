import Interface from "./DivBgInterface";
import Text from "../../textBlocks/authTextBlock/AuthTextBlock";

export default function DivBg({ bgUrl, text }: Interface) {
   return (
      <div className="flex-2 flex flex-col justify-center items-center lg:relative">
         <div
            className={`absolute opacity-70 z-0 inset-0 bg-no-repeat bg-cover bg-center`}
            style={{
               backgroundImage: `url(${bgUrl})`,
            }}
         />
         <Text
            props={{
               title: text.title,
               paragraph: text.paragraph,
            }}
         />
      </div>
   );
}
