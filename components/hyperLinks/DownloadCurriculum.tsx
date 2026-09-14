"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Download from "../icons/Icons";
import useFormButton from "@/components/buttons/animatedButton/useAnimatedButton";
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
            className="smallCallToAction">
                <Download iconName="download" className="aspect-square w-5 md:w-6 strokeAzulPestana" />
                <p className="">{t("cv")}</p>
            </Link>
        </motion.button>
    )
} 