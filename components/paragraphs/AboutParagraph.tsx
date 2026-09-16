"use client";

import { useTranslations } from "next-intl";

export default function AboutParagraph() {
   const t = useTranslations("home.segundaSessao.about");

   return ( 
   <p className="homeParagraph">
      {t.rich("me", { strong: (chunks) => <strong className="text-white">{chunks}</strong>})}
  </p>);
}
