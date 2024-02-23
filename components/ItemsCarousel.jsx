'use client';

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules'
import Item from './Item';

const ItemsCarousel = ({bikes}) => {
  return (
    <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      960: { slidesPerView: 3 },
      1440: { slidesPerView: 4 },
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className='popular-bike-slider mb-8'
    >
        {bikes.map((bike) => {
            return <SwiperSlide key={bike._id}>
                <Item bike={bike}/>
            </SwiperSlide>
        })}
    </Swiper>
  )
}

export default ItemsCarousel