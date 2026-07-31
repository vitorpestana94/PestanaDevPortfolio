"use client";

import { useGetAstronomyPictureOfPeriod } from "@/hooks/api/nasa/queries";
import NasaSlider from "@/components/sliders/NasaSlider";

export default function NasaSecondSection(){
    const { data } = useGetAstronomyPictureOfPeriod("2026-07-23", "2026-07-30");

    if (!data) return null;

    return (
        <section className="w-full">
            <NasaSlider data={data}/>
        </section>
    )
}