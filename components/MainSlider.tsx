"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const MainSlider = () => {
  return (
    <div className="sm:px-12 px-5 pb-12 md:pt-[10rem] sm:pt-[8rem] pt-[6rem]">
      <Swiper
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-[25rem]"
      >
        <SwiperSlide className="bg-[url('../public/assets/bg-1.jpeg')] w-[90%] h-[90%] bg-white text-black p-16">
          <h1>GAME OF THE WEEK</h1>
          <p>
            Join the party and hit the jackpot today at Funky Coins - where
            every bet is a chance to turn up the volume on your winnings!
          </p>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
