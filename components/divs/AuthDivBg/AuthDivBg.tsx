"use client";

import useAuthDivBg from "./useAuthDivBg";
import options from "../../../data/options.json";
import DivBg from "../DivBg/DivBg";

export default function AuthDivBg() {
   const { flow, t } = useAuthDivBg();

   return (
      <DivBg
         bgUrl={options.backgroundImages.authBanner}
         text={{
            title: t(`auth.${flow}.banner.title`),
            paragraph: t(`auth.${flow}.banner.paragraph`),
         }}
      />
   );
}
