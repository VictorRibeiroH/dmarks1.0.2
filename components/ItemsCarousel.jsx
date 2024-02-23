'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';

import Item from './Item';

SwiperCore.use([Pagination]);

const ItemsCarousel = ({ bikes }) => {
  return (
    <Swiper
      slidesPerView={3.5} // Exibe 3 itens completos e meio
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1.5 }, // Quando a largura da tela for menor, exibirá apenas 1.5 itens
        768: { slidesPerView: 2.5 }, // Quando a largura da tela for menor, exibirá apenas 2.5 itens
        960: { slidesPerView: 3.5 }, // Quando a largura da tela for menor, exibirá 3.5 itens
        1440: { slidesPerView: 4.5 }, // Quando a largura da tela for menor, exibirá 4.5 itens
      }}
      pagination={{
        clickable: true,
      }}
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