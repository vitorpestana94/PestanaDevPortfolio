import Interface from "@/components/images/NasaPictureOfTheDay/NasaPictureOfTheDayInterface";
import { motion } from "motion/react";
import TitleAndCopyright from "../textBlocks/nasaMediaCopyrightAndTitle/NasaMediaCopyrightAndTitle";

function IFrameTag({ title, url }:{ title: string, url: string }){
    return (
        <iframe 
            title={title} 
            className="w-full aspect-4/3 rounded-3xl" 
            src={url} 
            allow="autoplay; encrypted-media; fullscreen" 
            frameBorder="0" />
    )
}

function HeroIFrame({ url, copyRight, title } : Interface){
    const effect = { scale: 1.2 };

    return (
    <motion.div 
        whileHover={effect}
        whileTap={effect}
        className="w-[75%] md:w-[50%] lg:w-[40%] relative">
        <IFrameTag url={url} title={title} />
        <TitleAndCopyright copyright={copyRight} title={title} />
    </motion.div>
    )
}

function SliderIFrame({ url, copyRight, title } : Interface){
    return (
    <>
        <div className="w-full relative pointer-events-none">
            <IFrameTag url={url} title={title} />
        </div>
        <TitleAndCopyright copyright={copyRight} title={title} isSlider />
    </>
    )
}

export default function IFrame({ url, copyRight, title, isSlider = false } : Interface) {
    const getVideoUrl = () => {
        const videoId = url.split("/embed/")[1].split("?")[0];

        return `${url}&autoplay=1&mute=1&controls=0&loop=1&playsinline=1&rel=0&modestbranding=1&playlist=${videoId}`
    }

    return (
        <>
            {
                isSlider ? 
                <SliderIFrame url={getVideoUrl()} copyRight={copyRight} title={title} /> : 
                <HeroIFrame url={getVideoUrl()} copyRight={copyRight} title={title} />
            }
        </>
    )
}