"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiMenuAltLeft, BiSearchAlt2 } from "react-icons/bi";
import Logo from "../public/assets/jjjLogo.svg";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
    console.log(`the menu is ${open}`);
  };
  return (
    <>
      <nav className="bg-dark relative z-50">
        <div className="sm:px-6 sm:py-5 py-2 px-3 mx-auto flex justify-between items-center max-w-[1700px]">
          <div className="flex items-center justify-center gap-4">
            <BiMenuAltLeft
              size={30}
              onClick={handleMenu}
              className={`text-white lg:text-lg md:text-base text-sm sm:hidden block cursor-pointer p-[0.1rem] rounded-sm ${
                open ? "bg-transparent" : " bg-white/30"
              }`}
            />
            <Link href="/" className="cursor-pointer">
              <div className="flex justify-start items-center">
                <Image
                  src={Logo}
                  alt="JJJ Logo"
                  width={60}
                  height={94}
                  className="md:w-[60px] w-[40px]"
                />
                <h1 className="text-white font-semibold md:text-[18px] sm:text-[12px] pt-2 ml-1 hidden sm:block">
                  {" JIRA'S"} <br />
                  JACKPOT <br /> JUNGLE <br />
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between md:gap-7 gap-4">
            <AiOutlineGlobal
              size={36}
              className="text-white cursor-pointer hover:text-white/80 transition-all duration-100 md:block hidden"
            />
            <div className="md:p-2 px-[2px] rounded-md border  flex justify-start items-center ">
              <BiSearchAlt2
                size={26}
                className="text-white md:w-[26px] w-[20px]"
              />
              <input
                type="text"
                placeholder="Search"
                className="text-white text-[16px] pr-24 bg-transparent hidden md:block placeholder:uppercase placeholder:text-white placeholder:text-[14px] pl-3 outline-none"
              />
            </div>
            <button className="cursor-pointer transition-all hover:bg-primary/80 duration-100 uppercase text-white md:px-12 px-5 rounded-md sm:py-2 py-1 bg-primary font-medium border-primary border-2 md:text-[16px] text-[10px] whitespace-nowrap">
              sign in
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`absolute ${
          open ? "-left-28" : "left-0"
        } w-max h-full top-0 transition-all duration-200`}
      >
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
