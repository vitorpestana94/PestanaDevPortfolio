"use client";

import Interface from "./NasaPictureOfTheDayInterface";
import Image from "next/image";
import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";

export default function NasaPictureOfTheDay({ url, title, copyRight } : Interface) {
    const { ref, isInView } = useEffetInView();
    const effect = { scale: 1.15 };

    
    return (
        <motion.div className="relative w-[75%] md:w-[40%] aspect-4/3"
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
                    className="object-cover rounded-4xl"
                    priority
                />
                <div className="flex flex-col gap-y-0.75 absolute text-gray-300
                -bottom-9 text-[0.375rem] text-center right-0 left-0
                md:-bottom-11 md:text-[0.5625rem] md:text-right md:right-3
                3xl:text-[0.625rem]">
                    <p>{`Copyright:`}</p>
                    {`${copyRight}`}
                </div>
            </motion.div>
        </motion.div>
    )
}