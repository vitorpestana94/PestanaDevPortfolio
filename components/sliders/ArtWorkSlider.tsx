import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GetArtWotkResponseDto } from '@/models/interfaces/dtos/responses/GetArtWotkResponseDto';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';

export default function ArtWorkSlider({ data } : { data: GetArtWotkResponseDto[] }) {
    return (
    <>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 3,
           fill: "row",
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
         {data?.map((art) => (
        <SwiperSlide key={art.objectId} >
            <img
                src={art.primaryImage ?? ""}
                alt={art.title ?? ""}
                className="w-50 h-50 object-cover"
            />
        </SwiperSlide>
    ))}
      </Swiper>
    </>
  );
}
