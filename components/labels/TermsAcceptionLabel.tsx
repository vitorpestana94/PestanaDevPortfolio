import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import ReactHookFormPros from "@/models/interfaces/forms/ReactHookFormPros";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import Icon from "@/components/icons/Icons";
import Error from "@/components/errors/error/Error";
import { Link } from "@/i18n/routing";

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
               <p className="signUpCheckParagraph">
                  {t.rich("acceptTerms", {
                     terms: (chunks) => (
                        <Link
                           href="/terms-and-conditions"
                           className="hoverPestana"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           {chunks}
                        </Link>
                     ),
                     privacy: (chunks) => (
                        <Link
                           href="/privacy-policy"
                           className="hoverPestana"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           {chunks}
                        </Link>
                     ),
                  })}
               </p>
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
