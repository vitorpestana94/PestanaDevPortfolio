import Interface from "./AuthTextBlockInterface";
import VP from "@/components/icons/Icons";

export default function AuthTextBlock({ props }: Interface) {
   return (
      <div className="text-white homeBlur w-[50%] h-[50%] rounded-lg">
         <div className="flex flex-col justify-center gap-y-2 items-center w-full h-full pt-2 pb-5 lg:pb-10">
            <VP iconName="vP" className="w-[25%] sm:w-[20%] lg:w-[18%] mt-2" />
            <div className="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-5 items-center whitespace-pre-line px-4">
               <h2 className="text-center leading-[1.3] text-[0.625rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem]">
                  {props.title}
               </h2>
               <p className="opacity-80 text-[0.375rem] md:text-[0.625rem] lg:text-[0.75rem]">
                  {props.paragraph}
               </p>
            </div>
         </div>
      </div>
   );
}
