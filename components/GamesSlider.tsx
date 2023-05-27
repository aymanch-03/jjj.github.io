"use client";

import React, { SetStateAction, useRef, useState } from "react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const GamesSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="max-w-[85rem] mx-auto px-5 py-8">
      <div className="md:flex items-center justify-between mb-12">
        <div className="text-white flex items-center justify-between md:w-2/5 w-full  md:mt-0 mt-5">
          <div
            className={`cursor-pointer text-center uppercase font-normal md:text-xl sm:text-lg text-base transition-all ${
              activeTab === 0 ? "activeTab relative text-primary" : ""
            }`}
            onClick={() => handleTabClick(0)}
          >
            top games
          </div>
          <div
            className={`cursor-pointer text-center uppercase font-normal md:text-xl sm:text-lg text-base transition-all  ${
              activeTab === 1 ? "activeTab relative text-primary" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            slots
          </div>
          <div
            className={`cursor-pointer text-center uppercase font-normal md:text-xl sm:text-lg text-base transition-all  ${
              activeTab === 2 ? "activeTab relative text-primary" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            live casino
          </div>
        </div>
        <div className="flex md:justify-end justify-center items-center gap-2">
          <BiLeftArrowAlt
            className="text-white hover:text-white/70 cursor-pointer transition-all"
            size={32}
          />
          <BiRightArrowAlt
            className="text-white hover:text-white/70 cursor-pointer transition-all"
            size={32}
          />
        </div>
      </div>

      {activeTab === 0 && (
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper text-white"
          >
            <SwiperSlide className="min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/spin.jpeg')] gameSlide"></SwiperSlide>
            <SwiperSlide className="min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/happycoins.jpeg')] gameSlide"></SwiperSlide>
            <SwiperSlide className="min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/billardgo.jpeg')] gameSlide"></SwiperSlide>
            <SwiperSlide className="min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/spin.jpeg')] gameSlide"></SwiperSlide>
          </Swiper>
        </>
      )}
      {activeTab === 1 && <div>CONTENT FOR TAB 2</div>}
      {activeTab === 2 && <div>CONTENT FOR TAB 3</div>}
    </div>
  );
};

export default GamesSlider;
