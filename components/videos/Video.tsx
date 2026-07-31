import Interface from "@/components/images/NasaPictureOfTheDay/NasaPictureOfTheDayInterface";
import { motion } from "motion/react";
import TitleAndCopyright from "../textBlocks/nasaMediaCopyrightAndTitle/NasaMediaCopyrightAndTitle";

function VideoTag({ url } : { url: string }){
    return (
        <video
            className="w-full h-full object-cover rounded-3xl"
            src={url}
            autoPlay
            muted
            loop
            playsInline/>
    )
}

function HeroVideo({ url, copyRight, title } : Interface){
    const effect = { scale: 1.2 };

    return (
    <motion.div 
        whileHover={effect}
        whileTap={effect}
        className="w-[75%] md:w-[50%] lg:w-[40%] relative aspect-3/4">
        <VideoTag url={url} />
        <TitleAndCopyright copyright={copyRight} title={title} />
    </motion.div>
    )
}

function SliderVideo({ url, copyRight, title } : Interface){
    return (
    <>
        <div className="relative w-full aspect-4/3">
            <VideoTag url={url} />
        </div>
        <TitleAndCopyright copyright={copyRight} title={title} isSlider />
    </>
    )
}


export default function Video({ url, copyRight, title, isSlider } : Interface){
    return (
    <>
        {
            isSlider ? 
            <SliderVideo url={url} copyRight={copyRight} title={title} /> :
            <HeroVideo url={url} copyRight={copyRight} title={title} />
        }
    </>
    )
}