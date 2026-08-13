"use client";

import { useGetArts } from "@/hooks/api/artExhibition/queries";
import Main from "../wrappers/MainLayout";
import ArtkWorkSlider from "@/components/sliders/ArtWorkSlider";

export default function ArtExhibition(){
    const { data } = useGetArts("Van Gogh");

    return (
         <Main>
            <div className="w-full min-h-dvh">
                <ArtkWorkSlider data={data!} />
            </div>
        </Main>
    )
}