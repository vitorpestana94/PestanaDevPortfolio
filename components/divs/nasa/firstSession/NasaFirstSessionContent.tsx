"use client";

import NasaHero from "@/components/heros/NasaHero";
import AstronomyPictureOfTheDay from "@/components/textBlocks/NasaAstronomyPictureOfTheDayTextBlock";
import { useGetAstronomyPictureOfTheDay } from "@/hooks/api/nasa/queries";
import useEffetInView from "@/hooks/useEffetInView";
import { motion } from "motion/react";

export default function NasaFirstSessionContent(){
    const { ref } = useEffetInView();
    const { data } = useGetAstronomyPictureOfTheDay();
    
    if (!data) return null;

    return (
        <motion.div className="h-[90%] flex flex-col items-center blurBg
        mt-24 py-14 gap-y-10 mx-6
        md:gap-y-0 md:flex-row md:justify-around conteudoWrapper
        xl:mt-8 xl:py-6 
        3xl:mt-12 3xl:py-8"
        ref={ref}
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}>
            <AstronomyPictureOfTheDay nasaExplanation={data.explanation} />
            <NasaHero data={data} />
        </motion.div>
    )
}