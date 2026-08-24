import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { GetArtWotkResponseDto } from '@/models/interfaces/dtos/responses/GetArtWotkResponseDto';
import ArtWork from '../images/ArtWork/ArtWork';
import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

import { Grid, Pagination, Keyboard } from 'swiper/modules';

export default function ArtWorkSlider({ data } : { data: GetArtWotkResponseDto[] }) {
    const { ref, isInView } = useEffetInView();
  
    return (
      <motion.div 
        className="flex flex-col justify-center"
        ref={ref}
        initial={{ opacity: 0}}
        animate={isInView ? { opacity: 1} : {}}
        transition={{ duration: 0.9, delay: 1 }}>
        <Swiper
          grabCursor={true}
          keyboard={{
          enabled: true,
            onlyInViewport: false,
          }}
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: "row",
          }}
          lazyPreloadPrevNext={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination, Keyboard]}
          breakpoints={{
          0: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 5,
            ...({ grid: { rows: 3 } } as any) 
          },
          }}
          id="artWorkds"
          className='w-[85%]! md:w-[70%]! lg:w-[60%]! pb-10.5!'
        >
          {data?.map((art) => (
          <SwiperSlide key={art.objectId} >
              <ArtWork url={art.primaryImageSmall!} title={art.title!} date={art.objectDate!}/>
          </SwiperSlide>
      ))}
        </Swiper>
      </motion.div>
  );
}
