"use client";

import ArtkWorkSlider from "@/components/sliders/ArtWorkSlider";
import Header from "@/components/headers/home/HomeHeader";
import SearchInput from "@/components/inputs/searchArtWorkInput/SearchArtWorkInput";
import useArtExhibitionFirstSection from "./useArtExhibitionFirstSection";
import Wrapper from "@/components/wrappers/home/HomeWrapper";
import Title from "@/components/titles/HomeTitle";

export default function ArtExhibitionFirstSection(){
    const { data, search, setNewSearch } = useArtExhibitionFirstSection();

    return (
    <section className="w-full min-h-dvh flex flex-col justify-between mb-10" id="searchArt">
        <Header className="static!"/>
        <Wrapper className="flex flex-col items-center">
            <Title>
                <h1 className="azulPestana homeSubTitle text-center">{`Art Exhibition`}</h1>
                <h2 className="text-center text-gray-400 text-xs px-5 md:px-40 md:text-[1rem]">Search the Metropolitan Museum of Art and discover incredible artworks.</h2>
            </Title>
        </Wrapper>
        <SearchInput search={search} setSearch={setNewSearch} />
        <div className="min-h-80 md:min-h-100 flex flex-col justify-center">
            {data && <ArtkWorkSlider data={data} />}
        </div>
    </section>
    )
}