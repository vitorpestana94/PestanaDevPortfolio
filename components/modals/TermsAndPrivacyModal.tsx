import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import capitalizeWord from "@/utils/strings/capitalizeWord";
import useHandleMouseDown from "@/hooks/useHandleKeyDown";
import { useState, useRef } from "react";

export default function TermsAndPrivacyModal({
   provider,
   accepteTerms,
}: {
   provider: string;
   accepteTerms: (accepteded: boolean) => void;
}) {
   const t = useTranslations("auth.sign-up.form.firstStep.platform");
   const [close, setClose] = useState<boolean>(false);
   const navRef = useRef<HTMLDivElement>(null);

   function closeNow() {
      setClose(true);
   }

   useHandleMouseDown({
      shouldHandleNow: !close,
      ref: navRef,
      mouseDownCallBack: () => {
         closeNow();
      },
   });

   return (
      <>
         {!close && (
            <div className="blurBg fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-50 text-white">
               <div
                  className="homeGrayBg aspect-video flex flex-col justify-around w-[80%] sm:w-[70%] xl:w-[40%] rounded-3xl px-5 sm:px-10"
                  ref={navRef}
               >
                  <h2 className="sm:text-[1.25rem]">{t("title")}</h2>
                  <p className="text-[0.625rem] sm:text-base">
                     {t.rich("toCreate", {
                        platform: capitalizeWord(provider),
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
                  <hr className="border-gray-600" />
                  <div className="flex items-center gap-x-5 self-end text-[0.625rem] sm:text-xs">
                     <p
                        className="cursor-pointer text-gray-500"
                        onClick={() => {
                           closeNow();
                        }}
                     >
                        {t("cancel")}
                     </p>
                     <button
                        type="button"
                        className="cursor-pointer bgAzulPestana rounded-full p-2.5"
                        onClick={() => {
                           accepteTerms(true);
                           closeNow();
                        }}
                     >
                        {t("acceptContinue")}
                     </button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
