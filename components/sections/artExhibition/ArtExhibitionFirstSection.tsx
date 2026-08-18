"use client";

import ArtkWorkSlider from "@/components/sliders/ArtWorkSlider";
import SearchInput from "@/components/inputs/searchArtWorkInput/SearchArtWorkInput";
import useArtExhibitionFirstSection from "./useArtExhibitionFirstSection";
import Header from "@/components/headers/home/HomeHeader";
import ArtExhitionTitleAndSubTitle from "@/components/textBlocks/ArtExhitionTextBlock";
import Bg from "@/components/divs/artExhibitionBg/ArtExhibitionBg";
import ArtWorkNot from "@/components/textBlocks/ArtWorkNotFoundTextBlock";

export default function ArtExhibitionFirstSection(){
    const { data, search, setNewSearch } = useArtExhibitionFirstSection();
    
    return (
    <Bg>
        <section className="w-full min-h-dvh mb-10 flex flex-col justify-between" id="searchArt">
            <Header className="static!" />
            <ArtExhitionTitleAndSubTitle />
            <SearchInput search={search} setSearch={setNewSearch} />
            <div className="min-h-80 md:min-h-100 flex flex-col justify-center items-center">
                {data ? <ArtkWorkSlider data={data} /> : <ArtWorkNot searchTerm={search} />}
            </div>
        </section>
    </Bg>
    )
}