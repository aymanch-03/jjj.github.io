"use client";
import { useState } from "react";
import { BsChevronLeft, BsFillInfoCircleFill } from "react-icons/bs";
import { FaChevronRight, FaUser } from "react-icons/fa";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const handleChat = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed right-0 top-32 z-50 w-[24rem] h-[38rem] ">
      <div
        className={`transition-all h-full absolute w-full bg-dark rounded-l-xl ${
          open ? "right-0 overflow-hidden" : " -right-[24rem]"
        }`}
      >
        <div className="flex justify-start items-center">
          <div
            className={`rounded-l-md p-2.5 bg-primary cursor-pointer relative top-0  w-fit ${
              open ? "left-0" : "-left-[55px]"
            }`}
            onClick={handleChat}
          >
            <FaChevronRight
              size={35}
              className={`text-dark ${open ? "" : "rotate-180"}`}
            />
          </div>
          <div
            className={`p-4 flex items-center w-[21rem] justify-between ${
              open ? "" : ""
            }`}
          >
            <h1 className="text-white font-medium">Chat</h1>
            <div className="flex justify-center items-center gap-2">
              <FaUser size={20} className="text-primary" />
              <p className="text-primary text-sm">169</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <BsFillInfoCircleFill size={20} className="text-white" />
              <p className="text-white">Rules</p>
            </div>
          </div>
        </div>
        <div className="relative top-0"></div>
      </div>
    </div>
  );
};

export default Chat;
