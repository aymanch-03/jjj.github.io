"use client";
import Link from "next/link";
import { useState } from "react";
import { BiSticker } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaChevronRight, FaUser } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const Chat = () => {
  const breakpoint = 768;
  const size =
    typeof window !== "undefined" && window.innerWidth >= breakpoint ? 30 : 31;
  const [open, setOpen] = useState(false);
  const handleChat = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`fixed md:top-32 sm:top-28 top-[4.7rem] z-50 sm:w-[24rem] w-full sm:h-[38rem] h-[40rem] transition-all  ${
        open ? "right-0 overflow-hidden" : "sm:-right-[24.5rem] -right-[101%]"
      }`}
    >
      <div
        className={`transition-all h-full absolute w-full bg-dark rounded-l-2xl`}
      >
        <div className="flex justify-start items-center">
          <div
            className={` p-2.5 bg-primary cursor-pointer relative top-0  w-fit transition-all ${
              open ? "left-0 rounded-tl-2xl" : "-left-[55px] rounded-l-2xl"
            }`}
            onClick={handleChat}
          >
            <FaChevronRight
              size={size}
              // size={window.innerWidth >= breakpoint ? 30 : 31}
              className={`text-dark transition-all ${open ? "" : "rotate-180"}`}
            />
          </div>
          <div className="p-4 flex items-center w-full justify-between">
            <h1 className="text-white font-medium">Chat</h1>
            <div className="flex justify-center items-center gap-2">
              <FaUser size={15} className="text-primary" />
              <p className="text-primary text-sm">169</p>
            </div>

            <Link
              href="/"
              className="flex justify-center items-center gap-2 group"
            >
              <BsFillInfoCircleFill
                size={15}
                className="text-white group-hover:text-white/70 text-sm transition-all"
              />
              <p className="text-white group-hover:text-white/70 text-sm transition-all">
                Rules
              </p>
            </Link>
          </div>
        </div>

        {/* MESSAGES */}

        <div className="relative sm:-bottom-[29.2rem] -bottom-[31.2rem] w-[90%] flex items-center bg-[#424242] rounded-2xl justify-between p-3 mx-auto gap-4">
          <BiSticker
            size={40}
            className="text-primary hover:text-primary/80 cursor-pointer transition-all"
          />
          <input
            type="text"
            className=" placeholder:text-white text-base text-white bg-transparent w-full outline-none"
            placeholder="Type here"
          />
          <RiSendPlaneFill
            size={40}
            className="text-primary hover:text-primary/80 cursor-pointer transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
