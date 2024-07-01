import React from "react";
import img from "../../assets/images/hero_img.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <section className="home_hero">
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h1>
                Скидка 15% на все подвесные светильники{" "}
                <span>до 5 февраля</span>
              </h1>
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
