"use client";

import { NasaAstronomyPictureOfTheDayPageResponseDto } from "@/models/interfaces/dtos/responses/NasaAstronomyPictureOfTheDayPageResponseDto";
import NasaPictureOfTheDay from "../images/NasaPictureOfTheDay/NasaPictureOfTheDay";

export default function NasaHero({ data } : { data: NasaAstronomyPictureOfTheDayPageResponseDto }){
    return (
        <>
            {
                data &&  
                <NasaPictureOfTheDay 
                    title={data.title} 
                    url={data.url}
                    copyRight={data.copyright} />
            }
        </>
    )
}