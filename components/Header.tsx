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
        <div className="sm:px-[1.45rem] md:px-7 sm:py-2.5 py-2 px-5 mx-auto flex justify-between items-center min-w-full">
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
                  className="md:w-[40px] w-[30px]"
                />
                <h1 className="text-white font-semibold lg:text-[22px] sm:text-[19px] md:ml-[1.1rem] sm:ml-[1.1rem] hidden sm:block leading-5">
                  {" JIRA'S"} JACKPOT JUNGLE
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between lg:gap-7 md:gap-3.5 gap-4">
            <AiOutlineGlobal
              size={36}
              className="text-white cursor-pointer hover:text-white/80 transition-all md:block hidden"
            />
            <div className="lg:px-2 lg:py-[6.65px] md:px-2 md:py-[4.15px] px-[2px] rounded-md md:border md:border-solid border-none flex justify-start items-center ">
              <BiSearchAlt2
                size={26}
                className="text-white lg:w-[26px] md:w-[21px] w-[20px]"
              />
              <input
                type="text"
                placeholder="Search"
                className="text-white lg:text-[18px] md:text-[14px] text-[12px] lg:pr-24 md:pr-0 bg-transparent hidden md:block placeholder:uppercase placeholder:text-white placeholder:lg:text-[18px] placeholder:md:text-[14px] placeholder:text-[12px] pl-3 outline-none"
              />
            </div>
            <button className="cursor-pointer transition-all hover:bg-primary/80 uppercase text-white lg:px-12 md:px-8 px-5 rounded-md py-[6px] bg-primary font-medium border-primary border-2 lg:text-[18px] md:text-[14px] text-[12px] whitespace-nowrap">
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
