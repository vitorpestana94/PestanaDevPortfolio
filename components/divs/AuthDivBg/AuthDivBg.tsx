"use client";

import Text from "../../textBlocks/authTextBlock/AuthTextBlock";
import useAuthDivBg from "./useAuthDivBg";
import { FormType } from "@/components/sections/AuthSection/useAuthSection";
import options from "../../../options.json";

export default function AuthDivBg({ formType }: { formType: FormType }) {
   const { flow, t } = useAuthDivBg(formType);

   return (
      <div className="flex-1 lg:relative">
         <div
            className={`absolute opacity-70 z-0 inset-0 bg-no-repeat bg-cover bg-center`}
            style={{
               backgroundImage: `url(${options.backgroundImages.authBanner})`,
            }}
         />
         <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <Text
               props={{
                  title: t(`auth.${flow}.banner.title`),
                  paragraph: t(`auth.${flow}.banner.paragraph`),
               }}
            />
         </div>
      </div>
   );
}
