"use client";

import React, { SetStateAction, useRef, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import { Navigation } from "swiper";
import GamesContent from "../GamesSlider/GamesContent";

const GamesSlider = () => {
  const [activeTab, setActiveTab] = useState(0);
  const SlideRef = useRef<any>();
  const swiper = useSwiper();
  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };
  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  const Slider = () => {
    const breakpoints = {
      2500: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      2100: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    };
    return (
      <>
        <Swiper
          breakpoints={breakpoints}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          ref={SlideRef}
          className="mySwiper text-white"
        >
          <Link href="/" className="cursor-pointer">
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/spin.jpeg')] transition-all gameSlide z-10 relative cursor-pointer overflow-hidden">
              <GamesContent title="spin the luck" />
            </SwiperSlide>
          </Link>
          <Link href="/" className="cursor-pointer">
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/happycoins.jpeg')] transition-all gameSlide z-10 relative overflow-hidden cursor-pointer">
              <GamesContent title="happy coins" />
            </SwiperSlide>
          </Link>
          <Link href="/" className="cursor-pointer">
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/billardgo.jpeg')] transition-all gameSlide z-10 relative cursor-pointer overflow-hidden">
              <GamesContent title="billard go" />
            </SwiperSlide>
          </Link>
          <Link href="/" className="cursor-pointer">
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/spin.jpeg')]  z-10 transition-all gameSlide relative cursor-pointer overflow-hidden">
              <GamesContent title="spin the luck" />
            </SwiperSlide>
          </Link>
        </Swiper>
      </>
    );
  };
  return (
    <div className="max-w-[85rem] mx-auto px-5 py-8">
      <div className="md:flex items-center justify-between md:mb-12 mb-4">
        <div className="text-white flex items-center justify-between lg:w-2/5 md:w-3/5 w-full  md:mt-0 mt-5">
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
        <div className="flex md:justify-end justify-center items-center gap-2 md:p-0 pt-[20px]">
          <button onClick={handlePrev}>
            <BiLeftArrowAlt
              className="text-white/70 hover:text-white cursor-pointer transition-all"
              size={32}
            />
          </button>
          <button onClick={handleNext}>
            <BiRightArrowAlt
              className="text-white/70 hover:text-white cursor-pointer transition-all"
              size={32}
            />
          </button>
        </div>
      </div>
      {activeTab === 0 && <Slider />}
      {activeTab === 1 && <Slider />}
      {activeTab === 2 && <Slider />}
    </div>
  );
};

export default GamesSlider;
