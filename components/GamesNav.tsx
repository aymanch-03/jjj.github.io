import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useSwiper } from "swiper/react";
const GamesNav = () => {
  const swiper = useSwiper();
  return (
    <>
      <button onClick={() => swiper.slidePrev()}>
        <BiLeftArrowAlt
          className="text-white/70 hover:text-white cursor-pointer transition-all"
          size={32}
        />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <BiRightArrowAlt
          className="text-white/70 hover:text-white cursor-pointer transition-all"
          size={32}
        />
      </button>
    </>
  );
};

export default GamesNav;
