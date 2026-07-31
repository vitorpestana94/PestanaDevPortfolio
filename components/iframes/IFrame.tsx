import Interface from "@/components/images/NasaPictureOfTheDay/NasaPictureOfTheDayInterface";
import { motion } from "motion/react";
import TitleAndCopyright from "../textBlocks/nasaMediaCopyrightAndTitle/NasaMediaCopyrightAndTitle";

export default function IFrame({ url, copyRight, title } : Interface) {
    const effect = { scale: 1.2 };
    const formatUrl = () => `${url}&autoplay=1&mute=1&controls=0&playsinline=1&rel=0&modestbranding=1&modestbranding=1`

    return (
        <motion.div 
            whileHover={effect}
            whileTap={effect}
            className="w-[75%] md:w-[50%] lg:w-[40%] relative">
            <iframe 
                title={title} 
                className="w-full aspect-4/3 rounded-3xl" 
                src={formatUrl()} 
                allow="autoplay; encrypted-media; fullscreen" 
                frameBorder="0" />
            <TitleAndCopyright copyright={copyRight} title={title} />
        </motion.div>
    )
}