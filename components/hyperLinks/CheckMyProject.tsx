"use client";

import { Link } from "@/i18n/routing";
import useFormButton from "@components/buttons/formButton/useFormButton";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function CheckMyProject(){
    const { scale, transition } = useFormButton();
    const t = useTranslations("home.primeiraSessao");
    
    return (
        <motion.button
         whileTap={scale}
         whileHover={scale}
         transition={transition}
         >
            <Link href={"#meuTrabalho"} className="rounded-full bgLinear p-4 text-xs md:text-[1rem] md:p-5 
            pointer-events-auto text-white font-medium font-serif">
                {t("checkOut")}
            </Link>
        </motion.button>
    )
}