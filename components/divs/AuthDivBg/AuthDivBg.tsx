"use client";

import useAuthDivBg from "./useAuthDivBg";
import { FormType } from "@/components/sections/Auth/useAuthSection";
import options from "../../../data/options.json";
import DivBg from "../DivBg/DivBg";

export default function AuthDivBg({ formType }: { formType: FormType }) {
   const { flow, t } = useAuthDivBg(formType);

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
