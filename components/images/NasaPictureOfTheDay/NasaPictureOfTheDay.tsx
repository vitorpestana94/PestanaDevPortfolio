"use client";

import Interface from "./NasaPictureOfTheDayInterface";
import Image from "next/image";
import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";
import TitleAndCopyright from "@/components/textBlocks/nasaMediaCopyrightAndTitle/NasaMediaCopyrightAndTitle";

export default function NasaPictureOfTheDay({ url, title, copyRight } : Interface) {
    const { ref, isInView } = useEffetInView();
    const effect = { scale: 1.2 };

    return (
        <motion.div className="relative w-[75%] md:w-[50%] lg:w-[40%] aspect-4/3"
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 2 }}
            >
            <motion.div className="w-full h-full"
                whileHover={effect}
                whileTap={effect}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
                <Image
                    src={url}
                    alt={title}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 45vw"
                    className="object-cover rounded-3xl"
                    priority
                />
                <TitleAndCopyright copyright={copyRight} title={title} />
            </motion.div>
        </motion.div>
    )
}