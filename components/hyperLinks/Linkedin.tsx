"use client";

import { Link } from "@/i18n/routing";
import useFormButton from "@/components/buttons/animatedButton/useAnimatedButton";
import { motion } from "motion/react";
import options from "@/data/options.json";
import Icon from "../icons/Icons";

export default function Linkedin(){
    const { scale, transition } = useFormButton();
    
    return (
        <motion.button
         whileTap={scale}
         whileHover={scale}
         transition={transition}
         >
            <Link href={options.socialMedias.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className="smallCallToAction bg-[#0A66C2] flex gap-x-3 border-none! hover:border-none">
                <Icon iconName="linkedin" className="aspect-square w-6 fill-white"/>
                <p>Linkedin</p>
            </Link>
        </motion.button>
    )
}