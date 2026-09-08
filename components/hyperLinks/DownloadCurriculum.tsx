"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Download from "../icons/Icons";
import useFormButton from "@components/buttons/formButton/useFormButton";
import { motion } from "motion/react";

export default function DownloadCurriculum(){
    const t = useTranslations("home.primeiraSessao");
    const { scale, transition } = useFormButton();

    return (
        <motion.button
        whileTap={scale}
        whileHover={scale}
        transition={transition}>
            <Link href="/pestanadevCV.pdf" download 
            className="rounded-full bg-black px-8 py-3.5 pointer-events-auto text-white font-medium font-serif flex gap-x-3 border border-[#38b6ff]/30 hover:border-[#38b6ff]">
                <Download iconName="download" className="aspect-square w-6 strokeAzulPestana" />
                <p className="">{t("cv")}</p>
            </Link>
        </motion.button>
    )
} 