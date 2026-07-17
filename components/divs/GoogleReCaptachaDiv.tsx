"use client";

import { useTranslations } from "next-intl";

export default function GoogleReCaptachaDiv({
   className,
}: {
   className?: string;
}) {
   const t = useTranslations("googleReCaptcha");

   return (
      <p
         className={`text-[0.4375rem] text-[#818589] sm:text-[0.5rem] xl:text-[0.5625rem] 3xl:text-[0.625rem] text-center whitespace-pre-line leading-tight px-3 max-w-xs ${className}`}
      >
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
