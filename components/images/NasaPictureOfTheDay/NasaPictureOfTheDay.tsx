"use client";

import Interface from "./NasaPictureOfTheDayInterface";
import Image from "next/image";
import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";
import TitleAndCopyright from "@/components/textBlocks/nasaMediaCopyrightAndTitle/NasaMediaCopyrightAndTitle";

function NasaImage({ url, title, isSlider = false } : Interface ){
    return (
        <Image
            src={url}
            alt={title}
            unoptimized 
            fill
            quality={85}
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 45vw"
            className="object-fill rounded-3xl"
            priority={!isSlider}
        />
    )
}

function HeroPicture({ url, title, copyRight } : Interface ) {
    const { ref, isInView } = useEffetInView();
    const effect = { scale: 1.2 };

    return (
         <motion.div className="relative w-[75%] md:w-[50%] lg:w-[40%] aspect-4/3 max-h-115"
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
                <NasaImage url={url} title={title} />
                <TitleAndCopyright copyright={copyRight} title={title} />
            </motion.div>
        </motion.div>
    )
}


function SliderPicture({ url, title, copyRight } : Interface) {
    return (
        <>
            <div className="relative w-full aspect-4/3 max-h-115">
                <div className="w-full h-full">
                    <NasaImage url={url} title={title} isSlider/>
                </div>
            </div>
            <TitleAndCopyright copyright={copyRight} title={title} isSlider />
        </>
    )
}

export default function NasaPictureOfTheDay({ url, title, copyRight, isSlider = false } : Interface) {
    return (
        <>
            {
                isSlider ? 
                    <SliderPicture url={url} title={title} copyRight={copyRight} /> :
                    <HeroPicture url={url} title={title} copyRight={copyRight} />
            }
        </>
    )
}