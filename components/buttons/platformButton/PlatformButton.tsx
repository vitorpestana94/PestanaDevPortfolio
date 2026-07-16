import PlatformButtonInterface from "./PlatformButtonInterface";
import Icon from "@/components/icons/Icons";
import capitalizeWord from "@/utils/strings/capitalizeWord";
import usePlatformButton from "./usePlatformButton";
import { motion } from "motion/react";

export default function PlatformButton({
   iconName,
   signInFunction,
}: PlatformButtonInterface) {
   const { t, buttonColors, transition, scale } = usePlatformButton();

   return (
      <motion.button
         onClick={() => {
            signInFunction();
         }}
         whileTap={scale}
         whileHover={scale}
         transition={transition}
         type="button"
         className={`flex items-center justify-center xxs:gap-x-3 xxs:py-0.5 xs:gap-x-5 xs:py-1.5 px-2 xl:py-2 3xl:py-2.5
        rounded-3xl border border-transparent cursor-pointer
        ${buttonColors[iconName]}`}
      >
         <Icon iconName={iconName} className={`aspect-square w-4 fill-white`} />
         <span className={`xxs:text-[0.5rem] xs:text-[0.5625rem] text-nowrap`}>
            {`${t("with")} ${capitalizeWord(iconName)}`}
         </span>
      </motion.button>
   );
}
