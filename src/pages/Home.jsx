import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Home = ({ setIsActive }) => {
  return (
    <div onClick={() => setIsActive(false)}>
      <Swiper
        className="swipe"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={require("../assets/AMD.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../assets/Intel_14.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../assets/Intel_arc.jpg")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../assets/Nvidia_40.png")} alt="" />
        </SwiperSlide>
      </Swiper>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora
      voluptatibus in ab blanditiis eius modi, nemo nobis esse praesentium
      doloribus! Aperiam quae, est nam ullam esse itaque. Veritatis, impedit.
    </div>
  );
};

export default Home;
