"use client";

import ArtkWorkSlider from "@/components/sliders/ArtWorkSlider";
import SearchInput from "@/components/inputs/searchArtWorkInput/SearchArtWorkInput";
import useArtExhibitionFirstSection from "./useArtExhibitionFirstSection";
import Header from "@/components/headers/home/HomeHeader";
import ArtExhitionTitleAndSubTitle from "@/components/textBlocks/ArtExhitionTextBlock";
import Bg from "@/components/divs/artExhibitionBg/ArtExhibitionBg";
import ArtWorkNot from "@/components/textBlocks/ArtWorkNotFoundTextBlock";
import { GetArtWotkResponseDto } from "@/models/interfaces/dtos/responses/GetArtWotkResponseDto";

function getArtWorkSlider(data: GetArtWotkResponseDto[] | undefined, isLoading:boolean, search: string){
    if(data) {
        return <ArtkWorkSlider data={data} />
    } else if (!data && !isLoading){
        return <ArtWorkNot searchTerm={search} />
    }

    return null;
}

export default function ArtExhibitionFirstSection(){
    const { data, search, isLoading, setNewSearch } = useArtExhibitionFirstSection();

    return (
    <Bg>
        <section className="w-full min-h-dvh mb-10 flex flex-col justify-between" id="searchArt">
            <Header className="static!" />
            <div className="space-y-4">
                <ArtExhitionTitleAndSubTitle />
                <SearchInput search={search} setSearch={setNewSearch} />
            </div>
            <div className="min-h-80 md:min-h-110 3xl:min-h-160 flex flex-col justify-center">
                {getArtWorkSlider(data, isLoading, search)}
            </div>
        </section>
    </Bg>
    )
}