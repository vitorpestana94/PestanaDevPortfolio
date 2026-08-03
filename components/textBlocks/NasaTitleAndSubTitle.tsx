import Title from "@/components/titles/HomeTitle";
import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";

export default function NasaTitleAndSubTitle({ title, subTitle, titleStyle, subTitleStyle } : { title: string, subTitle: string, titleStyle?: string, subTitleStyle?:string }){
    const { ref, isInView } = useEffetInView();

    return (
        <Title className="gap-y-10 md:gap-y-3">
            <h2 className={`azulPestana nasaTitle tracking-wider leading-tight font-abril font-bold ${titleStyle}`}>
                {title}
            </h2>
            <motion.p className={`nasaParagrah mx-auto md:mx-0 whitespace-pre-line text-center md:text-left ${subTitleStyle}`}
                ref={ref}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, delay: 1.5 }}>
                {subTitle}
            </motion.p>
        </Title>
    )
}