"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function TermsOrPrivacyHyperLink({
   isTerms = false,
}: {
   isTerms?: boolean;
}) {
   const t = useTranslations(`termsAndPrivacy`);

   return (
      <Link href={isTerms ? "terms-and-conditions" : "privacy-policy"}>
         <p className="termsCopyPrivacyParagraph hover:text-[#38b6ff] hover:opacity-100">
            {t(isTerms ? "terms" : "privacy")}
         </p>
      </Link>
   );
}
