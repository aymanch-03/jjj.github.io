"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Logo from "../public/assets/jjjLogo.svg";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className="bg-dark fixed z-50 w-full">
        <div className="sm:px-6 sm:py-5 py-2 px-5 mx-auto flex justify-between items-center min-w-full">
          <div className="flex items-center justify-center gap-4">
            <RiMenuUnfoldFill
              onClick={handleMenu}
              size={30}
              className={`text-white lg:text-lg md:text-base text-sm sm:hidden block cursor-pointer p-[0.1rem] rounded-sm transition-all ${
                open ? "bg-transparent" : " bg-white/30 rotate-180"
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
                <h1 className="text-white font-semibold md:text-[18px] sm:text-[12px] pt-2 ml-1 hidden sm:block leading-5">
                  {" JIRA'S"} <br />
                  JACKPOT <br /> JUNGLE <br />
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between md:gap-7 gap-4">
            <AiOutlineGlobal
              size={36}
              className="text-white cursor-pointer hover:text-white/80 transition-all md:block hidden"
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
            <button className="cursor-pointer left- transition-all hover:bg-primary/80 uppercase text-white md:px-12 px-5 rounded-md sm:py-2 py-1 bg-primary font-medium border-primary border-2 md:text-[16px] text-[12px] whitespace-nowrap">
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
        <Sidebar
          // reponsponsiveProps={"sm:hidden sm:group-hover:block "}
          sidebarProps={`sm:left-0 ${open ? `-left-96` : ``}`}
        />
      </div>
    </div>
  );
};

export default Navbar;
