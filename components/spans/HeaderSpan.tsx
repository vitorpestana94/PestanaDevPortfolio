"use client";

import { useTranslations } from "next-intl";

export default function HeaderSpan(){
    const t = useTranslations("home.header");

    return (
        <span className="flex space-x-4 text-[1.25rem] text-[#bfbfbf]">
           <p>
            {
                t("sobre")
            }
           </p>
            <p>
            {
                t("meuTrabalho")
            }
           </p>
        </span>
    )
}