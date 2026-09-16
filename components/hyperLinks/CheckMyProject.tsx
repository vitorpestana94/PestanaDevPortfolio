"use client";

import { Link } from "@/i18n/routing";
import useFormButton from "@/components/buttons/animatedButton/useAnimatedButton";
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
            <Link href={"#meuTrabalho"} className="bigCallToAction bgLinear">
                {t("checkOut")}
            </Link>
        </motion.button>
    )
}