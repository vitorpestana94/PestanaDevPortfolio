"use client";

import { useGetAstronomyPictureOfPeriod } from "@/hooks/api/nasa/queries";
import NasaSlider from "@/components/sliders/NasaSlider";
import { useTranslations } from "next-intl";
import Wrapper from "@/components/wrappers/home/HomeWrapper";
import NasaTitleAndSubTitle from "@/components/textBlocks/NasaTitleAndSubTitle";
import getNasaInitialEndDates, { InitialEndDate } from "@/utils/dates/getNasaInitialEndDates";
import { motion } from "motion/react";
import { useLocale } from "next-intl";
import getDateAsLocaleString from "@/utils/dates/getDateAsLocaleString";

export default function NasaSecondSection(){
    const locale = useLocale();
    const dates: InitialEndDate = getNasaInitialEndDates();
    const t = useTranslations("nasa.secondSession");
    const { data } = useGetAstronomyPictureOfPeriod(dates.initial, dates.end);

    if (!data) return null;

    return (
        <section className="w-full min-h-dvh flex flex-col justify-center py-14 lg:py-16 xl:py-20">
            <Wrapper className="mx-auto">
                <NasaTitleAndSubTitle 
                    title={t("title")} 
                    subTitle={t("subTitle", {
                         initialDate : getDateAsLocaleString(dates.initial, locale), 
                         finalDate: getDateAsLocaleString(dates.end, locale)}
                    )}
                    subTitleStyle="text-center! leading-[1.6]" 
                    titleStyle="text-center!"/>
            </Wrapper>
            <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                
                <NasaSlider data={data} locale={locale}/>
            </motion.div>
        </section>
    )
}