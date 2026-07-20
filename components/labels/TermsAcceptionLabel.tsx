import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import Icon from "@/components/icons/Icons";
import Error from "@/components/errors/error/Error";
import TermsOrPrivacy from "../hyperLinks/TermsOrPrivacyHyperLink";

export default function TermsAcceptionLabel({
   accepted,
   errors,
   register,
}: { accepted: boolean } & ReactHookFormPros) {
   const t = useTranslations("auth.sign-up.form.thirdStep");
   const { scale, transition } = useButtonMotionEffects();

   return (
      <span className="flex flex-col justify-start gap-y-2 self-center">
         <label className="checkSpan">
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
               {accepted && (
                  <Icon
                     iconName="check"
                     className="checkButtonIcon stroke-[#38b6ff]!"
                  />
               )}
            </span>

            <span className="flex items-center gap-x-1 signUpCheckParagraph!">
               <p className="signUpCheckParagraph">{t("acceptTerms")}</p>
               <TermsOrPrivacy
                  isTerms
                  className="signUpCheckParagraph! opacity-100!"
               />
               <p className="signUpCheckParagraph">{t("and")}</p>
               <TermsOrPrivacy className="opacity-100!" />
            </span>
         </label>
         <Error
            styles={"ml-0!"}
            shouldRender={!!errors?.acceptedTerms?.message}
            message={(errors?.acceptedTerms?.message as string) ?? ""}
         />
      </span>
   );
}
