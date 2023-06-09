"use client";
// Import Swiper React components
import { FaChevronCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const MainSlider = () => {
  return (
    <div className="px-5 pb-12 md:pt-[10rem] sm:pt-[8rem] pt-[6rem] max-w-[85rem] mx-auto">
      <Swiper
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full md:h-[24rem] h-[28rem]"
      >
        <SwiperSlide className="bg-one bg-cover bg-center bg-no-repeat w-full h-full text-white md:px-16 px-6 rounded-3xl s-1 border border-white/50 !flex justify-start items-center slider">
          <div className="flex flex-col gap-4 md:justify-start md:w-[55%] w-full justify-center md:text-left text-center relative z-[1]">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
              GAME OF THE WEEK
            </h1>
            <p className="md:text-sm text-xs">
              Join the party and hit the jackpot today at Funky Coins - where{" "}
              every bet is a chance to turn up the volume on your winnings!
            </p>
            <button className="gap-3 rounded-lg group uppercase px-3 py-2 bg-primary flex items-center justify-center md:justify-start md:text-sm text-xs font-medium md:w-fit md:mx-0 mx-auto">
              <p className="uppercase md:text-sm text-xs font-medium">
                connect wallet
              </p>
              <FaChevronCircleRight
                size={18}
                className=" transition-all text-black rounded-full"
              />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-two bg-cover bg-center bg-no-repeat w-full h-full text-white md:px-16 px-6 rounded-3xl s-1 border border-white/50 !flex justify-start items-center slider">
          <div className="flex flex-col gap-4 md:justify-start md:w-[55%] w-full justify-center md:text-left text-center relative z-[1]">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
              GAME OF THE WEEK
            </h1>
            <p className="md:text-sm text-xs">
              Join the party and hit the jackpot today at Funky Coins - where{" "}
              every bet is a chance to turn up the volume on your winnings!
            </p>
            <button className="gap-3 rounded-lg group uppercase px-3 py-2 bg-primary flex items-center justify-center md:justify-start md:text-sm text-xs font-medium md:w-fit md:mx-0 mx-auto">
              <p className="uppercase md:text-sm text-xs font-medium">
                connect wallet
              </p>
              <FaChevronCircleRight
                size={18}
                className=" transition-all text-black rounded-full"
              />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-three bg-cover bg-center bg-no-repeat  w-full h-full text-white md:px-16 px-6 rounded-3xl s-1 border border-white/50 !flex justify-start items-center slider">
          <div className="flex flex-col gap-4 md:justify-start md:w-[55%] w-full justify-center md:text-left text-center relative z-[1]">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
              GAME OF THE WEEK
            </h1>
            <p className="md:text-sm text-xs">
              Join the party and hit the jackpot today at Funky Coins - where{" "}
              every bet is a chance to turn up the volume on your winnings!
            </p>
            <button className="gap-3 rounded-lg group uppercase px-3 py-2 bg-primary flex items-center justify-center md:justify-start md:text-sm text-xs font-medium md:w-fit md:mx-0 mx-auto">
              <p className="uppercase md:text-sm text-xs font-medium">
                connect wallet
              </p>
              <FaChevronCircleRight
                size={18}
                className=" transition-all text-black rounded-full"
              />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
