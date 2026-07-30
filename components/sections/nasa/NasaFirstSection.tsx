"use client";

import { useGetAstronomyPictureOfTheDay } from "@/hooks/api/nasa/queries";
import Wrapper from "@/components/wrappers/home/HomeWrapper";
import Image from "next/image";
import Header from "@/components/headers/home/HomeHeader";

export default function NasaFirstSection(){
    const { data, isFetching } = useGetAstronomyPictureOfTheDay();

    if (!data) return null;

    return (
        <section className="h-dvh">
            <Header />
            <Wrapper className="conteudoWrapper h-full flex justify-center items-center xl:my-10">
                {
                    data &&  
                    <div className="relative w-[45%] aspect-3/2.5">
                        <Image
                            src={data?.url}
                            alt={data.title}
                            fill
                            quality={85}
                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 45vw"
                            className="object-cover rounded-3xl"
                            priority
                        />
                    </div>
                }
            </Wrapper>
        </section>
    )
}