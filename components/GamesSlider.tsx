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
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/spin.jpeg')] gameSlide z-10 realtive">
              {/* <button
                className="cursor-pointer -translate-x-2/4 translate-y-0 left-2/4 relative -bottom-[200px] py-3 px-10 bg-primary text-white font-medium text-center rounded-2xl transition-all delay-200 group-hover:-bottom-[50px]
              "
              >
                <Link href="/">Play now</Link>
              </button> */}

              <FaPlay
                size={40}
                className="-translate-x-2/4 translate-y-0 left-2/4 relative -top-[200px] transition-all text-white delay-300 group-hover:top-[36px] group-hover:opacity-100 opacity-0"
              />
            </SwiperSlide>
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/happycoins.jpeg')] gameSlide z-10 realtive">
              {/* <button
                className="cursor-pointer -translate-x-2/4 translate-y-0 left-2/4 relative -bottom-[200px] py-3 px-10 bg-primary text-white font-medium text-center rounded-2xl transition-all delay-200 group-hover:-bottom-[50px]
              "
              >
                <Link href="/">Play now</Link>
              </button> */}

              <FaPlay
                size={40}
                className="-translate-x-2/4 translate-y-0 left-2/4 relative -top-[200px] transition-all text-white delay-300 group-hover:top-[36px] group-hover:opacity-100 opacity-0"
              />
            </SwiperSlide>
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/billardgo.jpeg')] gameSlide z-10 realtive">
              {/* <button
                className="cursor-pointer -translate-x-2/4 translate-y-0 left-2/4 relative -bottom-[200px] py-3 px-10 bg-primary text-white font-medium text-center rounded-2xl transition-all delay-200 group-hover:-bottom-[50px]
              "
              >
                <Link href="/">Play now</Link>
              </button> */}

              <FaPlay
                size={40}
                className="-translate-x-2/4 translate-y-0 left-2/4 relative -top-[200px] transition-all text-white delay-300 group-hover:top-[36px] group-hover:opacity-100 opacity-0"
              />
            </SwiperSlide>
            <SwiperSlide className="group min-h-[12rem] bg-cover bg-center p-8 bg-[url('/assets/gamesSlider/spin.jpeg')]  z-10 gameSlide realtive">
              {/* <button
                className="cursor-pointer -translate-x-2/4 translate-y-0 left-2/4 relative -bottom-[200px] py-3 px-10 bg-primary text-white font-medium text-center rounded-2xl transition-all delay-200 group-hover:-bottom-[50px]
              "
              >
                <Link href="/">Play now</Link>
              </button> */}

              <FaPlay
                size={40}
                className="-translate-x-2/4 translate-y-0 left-2/4 relative -top-[200px] transition-all text-white delay-300 group-hover:top-[36px] group-hover:opacity-100 opacity-0"
              />
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {activeTab === 1 && <div>CONTENT FOR TAB 2</div>}
      {activeTab === 2 && <div>CONTENT FOR TAB 3</div>}
    </div>
  );
};

export default GamesSlider;
