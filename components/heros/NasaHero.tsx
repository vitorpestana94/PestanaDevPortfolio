"use client";

import { NasaAstronomyPictureOfTheDayPageResponseDto } from "@/models/interfaces/dtos/responses/NasaAstronomyPictureOfTheDayPageResponseDto";
import NasaPictureOfTheDay from "../images/NasaPictureOfTheDay/NasaPictureOfTheDay";
import IFrame from "../iframes/IFrame";
import NasaMedia from "../media/NasaMedia";

export default function NasaHero({ data } : { data: NasaAstronomyPictureOfTheDayPageResponseDto }){
    const getComponent = (d: NasaAstronomyPictureOfTheDayPageResponseDto) => data.media_type === "image" ? 
        <NasaPictureOfTheDay title={d.title} url={d.url} copyRight={d.copyright} /> : 
        <IFrame url={d.url} title={d.title} copyRight={d.copyright} />

        return (
        <>
            { data && <NasaMedia data={data}/> }
        </>
    )
}