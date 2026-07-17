import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import Icon from "@/components/icons/Icons";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import TermsOrPrivacy from "../hyperLinks/TermsOrPrivacyHyperLink";

export default function TermsAcceptionLabel({
   accepted,
   register,
}: { accepted: boolean } & ReactHookFormPros) {
   const t = useTranslations("auth.sign-up.form.thirdStep");
   const { scale, transition } = useButtonMotionEffects();

   return (
      <label className="checkSpan self-center!">
         <motion.input
            type="checkbox"
            className="sr-only"
            whileTap={scale}
            transition={transition}
            {...register!("acceptedTerms", {
               required: t("error.acceptTerms"),
            })}
         />

         <span className="checkButton">
            {accepted && <Icon iconName="check" className="checkButtonIcon" />}
         </span>

         <span className="flex gap-x-1 signUpCheckParagraph!">
            <p className="signUpCheckParagraph">{t("acceptTerms")}</p>
            <TermsOrPrivacy
               isTerms
               className="signUpCheckParagraph! opacity-100!"
            />
            <p className="signUpCheckParagraph">{t("and")}</p>
            <TermsOrPrivacy className="opacity-100!" />
         </span>
      </label>
   );
}
