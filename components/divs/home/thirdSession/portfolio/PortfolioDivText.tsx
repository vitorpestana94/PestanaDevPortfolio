import PortfolioDivTextInterface from "./PortfolioDivText/PortfolioDivText";
import { motion } from "motion/react";
import useIsMobile from "@/hooks/useIsMobile";
import Icon from "@/components/icons/Icons";
import { IconName } from "@/components/icons/Icons";

export default function PortfolioDivText({
   show,
   text,
   style,
   title,
   icons,
}: PortfolioDivTextInterface) {
   const { isMobile } = useIsMobile();

   return (
      <>
         {show && !isMobile && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className={`absolute cursor-pointer z-50 px-3 py-2 bg-black/30 backdrop-blur-xl 
                  ${style ? style : "top-full w-full rounded-b-2xl -mt-px"}`}
            >
               <div className="flex flex-col gap-y-2 p-3">
                  {title && (
                     <p className="text-white text-justify text-[0.625rem] sm:text-xs xl:text-[0.875rem] 2xl:text-base font-semibold tracking-wider mb-3">
                        {title}
                     </p>
                  )}
                  <p className="text-white text-justify text-[0.5rem] sm:text-[0.625rem] 3xl:text-xs whitespace-pre-line">
                     {text}
                  </p>
               </div>
               {icons && (
                  <span className="flex mt-0.5 gap-x-1 mx-1 justify-end items-center">
                     {icons.map((icon, index) => {
                        return (
                           <Icon
                              iconName={icon as IconName}
                              className="aspect-square w-4.5"
                              key={index}
                           />
                        );
                     })}
                  </span>
               )}
            </motion.div>
         )}
      </>
   );
}
