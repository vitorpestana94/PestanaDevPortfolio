"use client";

import { NasaAstronomyPictureOfTheDayPageResponseDto } from "@/models/interfaces/dtos/responses/NasaAstronomyPictureOfTheDayPageResponseDto";
import NasaMedia from "../media/NasaMedia";

export default function NasaHero({ data } : { data: NasaAstronomyPictureOfTheDayPageResponseDto }){
    return (
    <>
        { data && <NasaMedia data={data}/> }
    </>
    )
}