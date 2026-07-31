import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { NasaAstronomyPictureOfTheDayPageResponseDto } from "@/models/interfaces/dtos/responses/NasaAstronomyPictureOfTheDayPageResponseDto";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import NasaMedia from "../media/NasaMedia";

export default function NasaSlider({ data } : { data: NasaAstronomyPictureOfTheDayPageResponseDto[] }){
    return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        pagination
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="py-20!">
        {data.map((d, index) => (
            <SwiperSlide className="w-1/3! my-auto! select-none!" key={index}>
                <NasaMedia data={d} isSlider/>
            </SwiperSlide>
        ))}
    </Swiper>
    )
}