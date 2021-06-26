// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide/Slide";

// Import Swiper styles
import "./VerticalSlider.css";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function VerticalSlider() {
  return (
    <Swiper
      style={{ zIndex: "1" }}
      autoplay={true}
      className="h-50"
      spaceBetween={50}
      slidesPerView={1}
      direction="vertical"
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </Swiper>
  );
}

export default VerticalSlider;
