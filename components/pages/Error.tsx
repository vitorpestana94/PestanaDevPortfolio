"use client";

import Button from "../buttons/DefaultButton";
import ErrorIcon from "../icons/Icons";
import { useTranslations } from "next-intl";
import ExceptionSection from "../sections/ExceptionSection";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Error({ action }: { action: () => void }) {
   const t = useTranslations("error");

   return (
      <ExceptionSection>
           <span className="flex items-center justify-around flex-col gap-y-4 sm:gap-y-6 xl:gap-y-8 w-[80%] sm:w-1/2 xl:w-[30%] text-white blurBg py-5 rounded-2xl">
               <DotLottieReact className="w-[35%]" src="/lotties/error.json" autoplay loop/>
               <span className="flex flex-col items-center gap-y-5">
                   <p className="text-xl md:text-4xl lg:text-3xl font-abril font-bold tracking-widest">
                     {t("ops")}
                  </p>
                   <p className="text-[0.5rem] sm:text-[0.625rem]">
                      {t("something")}
                   </p>
                </span>
                <Button
                   label={t("buttonLabel")}
                   styles="bgAzulPestana"
                   onClick={action}
                />
             </span>
      </ExceptionSection>
   );
}
