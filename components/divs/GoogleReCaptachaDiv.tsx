"use client";

import { useTranslations } from "next-intl";

export default function GoogleReCaptachaDiv() {
   const t = useTranslations("googleReCaptcha");

   return (
      <p className="recaptcha-text text-[0.43755rem] sm:text-[0.5rem] text-center whitespace-pre-line leading-tight px-3 max-w-xs">
         {t("protectedBy")}
         <a
            href="https://policies.google.com/privacy"
            className="hoverPestana"
            target="_blank"
            rel="noopener noreferrer"
         >
            {t("privacy")}
         </a>
         <a
            href="https://policies.google.com/terms"
            className="hoverPestana"
            target="_blank"
            rel="noopener noreferrer"
         >
            {t("terms")}
         </a>
         {t("apply")}
      </p>
   );
}
