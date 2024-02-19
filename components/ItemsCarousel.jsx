'use client';

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules'
import Item from './Item';

const ItemsCarousel = ({bikes}) => {
  return (
    <Swiper>
        {bikes.map((bike) => {
            return <SwiperSlide key={bike._id}>
                <Item bike={bike}/>
            </SwiperSlide>
        })}
    </Swiper>
  )
}

export default ItemsCarousel