import Icon from "../icons/Icons";

export default function DeleteAccountParagraph({ text }: { text: string }) {
   return (
      <span className="flex items-center gap-x-3 w-full">
         <Icon
            iconName="xCircle"
            className="aspect-square w-3 sm:w-4 fill-red-900"
         />
         <p className="text-[0.5rem] sm:text-[0.5rem] md:text-[0.625rem]">
            {text}
         </p>
      </span>
   );
}
