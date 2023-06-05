"use client";

import React, { SetStateAction, useRef, useState } from "react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import { Navigation } from "swiper";

const GamesSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };
  const Slider = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
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
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Navigation]}
          className="mySwiper text-white"
        >
          <Link href="/" className="cursor-pointer">
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/spin.jpeg')] transition-all gameSlide z-10 relative cursor-pointer overflow-hidden">
              <FaPlay
                size={40}
                className="-translate-x-2/4 translate-y-0 left-[120%] group-hover:left-1/2 relative transition-all text-white top-[36px] group-hover:opacity-100 opacity-0"
              />
              <h3 className="uppercase text-white font-medium absolute right-0 bottom-0 text-xl px-6 transition-all group-hover:py-5 py-3">
                spin the luck
              </h3>
            </SwiperSlide>
          </Link>
          <Link href="/" className="cursor-pointer">
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/happycoins.jpeg')] transition-all gameSlide z-10 relative overflow-hidden cursor-pointer">
              <FaPlay
                size={40}
                className="-translate-x-2/4 translate-y-0 left-[120%] group-hover:left-1/2 relative transition-all text-white top-[36px] group-hover:opacity-100 opacity-0"
              />
              <h3 className="uppercase text-white font-medium absolute right-0 bottom-0 text-xl px-6 transition-all group-hover:py-5 py-3">
                happy coins
              </h3>
            </SwiperSlide>
          </Link>
          <Link href="/" className="cursor-pointer">
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/billardgo.jpeg')] transition-all gameSlide z-10 relative cursor-pointer overflow-hidden">
              <FaPlay
                size={40}
                className="-translate-x-2/4 translate-y-0 left-[120%] group-hover:left-1/2 relative transition-all text-white top-[36px] group-hover:opacity-100 opacity-0"
              />
              <h3 className="uppercase text-white font-medium absolute right-0 bottom-0 text-xl px-6 transition-all group-hover:py-5 py-3">
                Billard go
              </h3>
            </SwiperSlide>
          </Link>
          <Link href="/" className="cursor-pointer">
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/spin.jpeg')]  z-10 transition-all gameSlide relative cursor-pointer overflow-hidden">
              <FaPlay
                size={40}
                className="-translate-x-2/4 translate-y-0 left-[120%] group-hover:left-1/2 relative transition-all text-white top-[36px] group-hover:opacity-100 opacity-0"
              />
              <h3 className="uppercase text-white font-medium absolute right-0 bottom-0 text-xl px-6 transition-all group-hover:py-5 py-3">
                spin the luck
              </h3>
            </SwiperSlide>
          </Link>
        </Swiper>
      </>
    );
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
      {activeTab === 0 && <Slider />}
      {activeTab === 1 && <Slider />}
      {activeTab === 2 && <Slider />}
    </div>
  );
};

export default GamesSlider;
