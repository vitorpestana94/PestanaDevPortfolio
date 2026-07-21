import Interface from "../divs/deleteAccountDiv/DeleteAccountDivInterface";
import Icon from "@/components/icons/Icons";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import { motion } from "motion/react";

export default function ImSureCheckButton({
   text,
   deleteConfirmationWasNotClicked,
   handleDeleteClick,
}: Interface & { text: string }) {
   const { scale, transition } = useButtonMotionEffects();

   return (
      <span className="checkSpan">
         <motion.button
            type="button"
            className="checkButton"
            onClick={() => handleDeleteClick()}
            whileTap={scale}
            transition={transition}
         >
            {!deleteConfirmationWasNotClicked && (
               <Icon iconName="check" className="checkButtonIcon" />
            )}
         </motion.button>
         <p className="checkParagraph">{text}</p>
      </span>
   );
}
