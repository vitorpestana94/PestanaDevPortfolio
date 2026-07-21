"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function TermsOrPrivacyHyperLink({
   className,
   isTerms = false,
}: {
   isTerms?: boolean;
   className?: string;
}) {
   const t = useTranslations(`termsAndPrivacy`);

   return (
      <Link
         href={isTerms ? "/terms-and-conditions" : "/privacy-policy"}
         target="_blank"
         rel="noopener noreferrer"
      >
         <p
            className={`termsCopyPrivacyParagraph hover:text-[#38b6ff] hover:opacity-100 ${className}`}
         >
            {t(isTerms ? "terms" : "privacy")}
         </p>
      </Link>
   );
}
