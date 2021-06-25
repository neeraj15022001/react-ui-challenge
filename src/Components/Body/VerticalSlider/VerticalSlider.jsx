// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import "swiper/components/navigation/navigation.min.css"
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function VerticalSlider() {
  return (
      <Swiper
      className="mt-5 h-50"
      spaceBetween={50}
      slidesPerView={1}
      direction="vertical"
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="bg-light text-dark">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-light text-dark">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-light text-dark">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-light text-dark">Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
}

export default VerticalSlider;
