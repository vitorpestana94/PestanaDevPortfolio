import Title from "@/components/titles/HomeTitle";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import useEffetInView from "@/hooks/useEffetInView";

export default  function NasaAstronomyPictureOfTheDayTextBlock({ nasaExplanation } : { nasaExplanation: string }){
    const { ref, isInView } = useEffetInView();
    const t = useTranslations("nasa.firstSection");

    return (
        <div className="flex flex-col justify-around  
        w-full px-10 h-full gap-y-8
        md:items-start md:px-0 md:w-[30%] md:h-[70%] mx:gap-y-0">
            <Title>
                <h2 className="azulPestana nasaTitle tracking-wider leading-tight font-abril font-bold">{t("title")}</h2>
                <motion.p className="nasaParagrah"
                    ref={ref}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.2, delay: 1.5 }}>
                    {t("about")}
                </motion.p>
            </Title>
            <motion.p className="nasaParagrah"
                ref={ref}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, delay: 1.5 }}
            >
                {`"${nasaExplanation}"`}
            </motion.p>
        </div>
    )
}