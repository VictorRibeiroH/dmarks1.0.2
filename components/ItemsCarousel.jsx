"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import Item from './Item';

SwiperCore.use([Navigation, Pagination]);

const ItemsCarousel = ({ bikes }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      navigation={true}
      className='popular-bike-slider mb-8'
    >
      {bikes.map((bike) => (
        <SwiperSlide key={bike._id}>
          <Item bike={bike}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ItemsCarousel;

