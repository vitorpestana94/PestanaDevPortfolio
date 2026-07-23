import PlatformButtonInterface from "./PlatformButtonInterface";
import Icon from "@/components/icons/Icons";
import capitalizeWord from "@/utils/strings/capitalizeWord";
import usePlatformButton from "./usePlatformButton";
import { motion } from "motion/react";
import TermsAndPrivacyModal from "@/components/modals/TermsAndPrivacyModal";

export default function PlatformButton({
   iconName,
   isSignUp = false,
   signInFunction,
}: PlatformButtonInterface) {
   const {
      t,
      buttonColors,
      transition,
      scale,
      show,
      showTermsPolicyModal,
      accepteTerms,
   } = usePlatformButton(signInFunction, isSignUp);

   return (
      <>
         <motion.button
            onClick={() => {
               showTermsPolicyModal();
            }}
            whileTap={scale}
            whileHover={scale}
            transition={transition}
            type="button"
            className={`flex items-center justify-center xxs:gap-x-3 xxs:py-0.5 xs:gap-x-5 xs:py-1.5 px-2 xl:py-2 3xl:py-2.5
            rounded-3xl border border-transparent cursor-pointer
            ${buttonColors[iconName]}`}
         >
            <Icon
               iconName={iconName}
               className={`aspect-square w-4 fill-white`}
            />
            <span
               className={`xxs:text-[0.5rem] xs:text-[0.5625rem] text-nowrap`}
            >
               {`${t("auth.common.with", { platform: capitalizeWord(iconName) })}`}
            </span>
         </motion.button>
         {(show && isSignUp) && (
            <TermsAndPrivacyModal
               accepteTerms={accepteTerms}
               provider={iconName}
            />
         )}
      </>
   );
}
