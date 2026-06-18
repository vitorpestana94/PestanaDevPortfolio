"use client";

import Button from "../buttons/DefaultButton";
import ErrorIcon from "../icons/Icons";
import { useTranslations } from "next-intl";

export default function ErrorModal({ isError }: { isError: boolean }) {
   const t = useTranslations("error");

   return (
      <>
         {isError && (
            <div className="fixed flex items-center justify-center p-4 top-0 bottom-0 right-0 left-0  bg-black/30 z-50 text-white">
               <div className="max-w-md text-center flex flex-col items-center bg-[#242424] aspect-square w-[80%] lg:w-[50%] rounded-2xl">
                  <span className="w-full bg-red-900 h-[40%] flex items-center justify-center rounded-t-2xl">
                     <ErrorIcon
                        iconName="error"
                        className="aspect-square w-[20%] max-w-sm"
                     />
                  </span>
                  <span className="flex flex-1 justify-around flex-col w-full">
                     <span className="flex flex-col gap-y-5">
                        <p className="text-xl md:text-4xl lg:text-5xl">
                           {t("ops")}
                        </p>
                        <p className="text-[0.5rem] sm:text-[0.625rem]">
                           {t("something")}
                        </p>
                     </span>
                     <Button
                        label={t("buttonLabel")}
                        styles="bg-yellow-600"
                        onClick={() => {
                           window.location.reload();
                        }}
                     />
                  </span>
               </div>
            </div>
         )}
      </>
   );
}
