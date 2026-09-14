"use client";

import { Link } from "@/i18n/routing";
import useFormButton from "@/components/buttons/animatedButton/useAnimatedButton";
import { motion } from "motion/react";
import options from "@/data/options.json";
import Icon from "../icons/Icons";

export default function GitHub(){
    const { scale, transition } = useFormButton();
    
    return (
        <motion.button
         whileTap={scale}
         whileHover={scale}
         transition={transition}
         >
            <Link href={options.socialMedias.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="smallCallToAction bg-[#24292E]! border-none!">
                <Icon iconName="gitHub" className="aspect-square w-6"/>
                <p>GitHub</p>
            </Link>
        </motion.button>
    )
}