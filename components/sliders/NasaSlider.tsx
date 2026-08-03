import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { NasaAstronomyPictureOfTheDayPageResponseDto } from "@/models/interfaces/dtos/responses/NasaAstronomyPictureOfTheDayPageResponseDto";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard } from 'swiper/modules';
import NasaMedia from "../media/NasaMedia";
import Explanation from "../textBlocks/NasaSlideExplanation";

export default function NasaSlider({ data, locale } : { data: NasaAstronomyPictureOfTheDayPageResponseDto[], locale: string }){
    return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        keyboard={{
            enabled: true,
            onlyInViewport: false,
        }}
        centeredSlides={true}
        pagination={{
            clickable: true,
        }}
        slidesPerView={3}
        breakpoints={{
            0: {
                slidesPerView: "auto",
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
        }}
        modules={[EffectCoverflow, Pagination, Keyboard]}
        className="w-full py-14 lg:py-10!  3xl:px-5!"
        id="picturesOfTheWeek">
        {data.map((d, index) => (
            <SwiperSlide className="w-[80%]! sm:w-1/2! lg:w-1/3! my-auto! space-y-4 select-none!" key={index}>
                <Explanation explanation={d.explanation} date={d.date} locale={locale}/>
                <NasaMedia data={d} isSlider/>
            </SwiperSlide>
        ))}
    </Swiper>
    )
}