"use client";

import ArtkWorkSlider from "@/components/sliders/ArtWorkSlider";
import SearchInput from "@/components/inputs/searchArtWorkInput/SearchArtWorkInput";
import useArtExhibitionFirstSection from "./useArtExhibitionFirstSection";
import Header from "@/components/headers/home/HomeHeader";
import ArtExhitionTitleAndSubTitle from "@/components/textBlocks/ArtExhitionTextBlock";
import Bg from "@/components/divs/artExhibitionBg/ArtExhibitionBg";

export default function ArtExhibitionFirstSection(){
    const { data, search, setNewSearch } = useArtExhibitionFirstSection();

    return (
    <Bg>
        <section className="w-full min-h-dvh flex flex-col justify-between mb-10" id="searchArt">
            <Header className="static!" />
            <ArtExhitionTitleAndSubTitle />
            <SearchInput search={search} setSearch={setNewSearch} />
            <div className="min-h-80 md:min-h-100 flex flex-col justify-center">
                {data && <ArtkWorkSlider data={data} />}
            </div>
        </section>
    </Bg>
    )
}