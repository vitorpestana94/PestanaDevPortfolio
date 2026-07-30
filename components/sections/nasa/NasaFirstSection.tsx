"use client";

import { useGetAstronomyPictureOfTheDay } from "@/hooks/api/nasa/queries";
import Wrapper from "@/components/wrappers/home/HomeWrapper";
import Header from "@/components/headers/home/HomeHeader";
import NasaHero from "@/components/heros/NasaHero";
import AstronomyPictureOfTheDay from "@/components/textBlocks/NasaAstronomyPictureOfTheDayTextBlock";

export default function NasaFirstSection(){
    const { data } = useGetAstronomyPictureOfTheDay();

    if (!data) return null;

    return (
        <section className="min-h-dvh md:h-dvh">
            <Header />
            <Wrapper className="conteudoWrapper h-full gap-y-10 flex flex-col items-center 
            my-24
            md:gap-y-0 md:flex-row md:justify-around
            xl:my-8  
            3xl:my-12">
                <AstronomyPictureOfTheDay nasaExplanation={data.explanation} />
                <NasaHero data={data} />
            </Wrapper>
        </section>
    )
}