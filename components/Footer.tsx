import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import adult from "../public/assets/18.svg";
import Logo from "../public/assets/jjjLogo.svg";
import rg from "../public/assets/rg.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t-2 border-white sm:px-12 px-5 py-12 grid grid-cols-1 lg:gap-40 md:gap-28 sm:gap-14 gap-10 lg:grid-cols-2">
      <div className="lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
        <div className="sm:flex sm:justify-start sm:items-start sm:gap-32 gap-9">
          <Link href="/" className="cursor-pointer">
            <div className="flex justify-start items-center">
              <Image
                src={Logo}
                alt="JJJ Logo"
                width={60}
                height={94}
                className="md:w-[60px] w-[40px]"
              />
              <h1 className="text-white font-semibold md:text-[18px] sm:text-[12px] pt-2 ml-1 leading-5">
                {" JIRA'S"} <br />
                JACKPOT <br /> JUNGLE <br />
              </h1>
            </div>
          </Link>
          <p className=" text-white lg:text-base md:text-sm text-xs font-light pt-[12px]">
            Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Link
            href="/"
            className="text-[#1a1a1a] p-1.5 rounded-full bg-primary transition-all group hover:bg-primary/50 hover:scale-90"
          >
            <BsTwitter
              size={22}
              className="group-hover:text-white transition-all"
            />
          </Link>
          <Link
            href="/"
            className="text-[#1a1a1a] p-1.5 rounded-full bg-primary transition-all group hover:bg-primary/50 hover:scale-90"
          >
            <BsDiscord
              size={22}
              className="group-hover:text-white transition-all"
            />
          </Link>
          <Link
            href="/"
            className="text-[#1a1a1a] p-1.5 rounded-full bg-primary transition-all group hover:bg-primary/50 hover:scale-90"
          >
            <FaTelegramPlane
              size={22}
              className="group-hover:text-white transition-all"
            />
          </Link>
        </div>
      </div>
      <div className=" grid grid-cols-2 links pt-[12px]">
        <ul className="space-y-5">
          <li className="uppercase lg:text-base md:text-sm text-xs text-white font-medium">
            <Link href="/">Privacy policy</Link>
          </li>
          <li className="uppercase lg:text-base md:text-sm text-xs text-white font-medium">
            <Link href="/">terms & conditions</Link>
          </li>
          <li className="uppercase lg:text-base md:text-sm text-xs text-white font-medium">
            <Link href="/">kyc policies</Link>
          </li>
          <li className="uppercase lg:text-base md:text-sm text-xs text-white font-medium">
            <Link href="/">terms of service</Link>
          </li>
        </ul>
        <ul className="space-y-5">
          <li className="uppercase lg:text-base md:text-sm text-xs text-white font-medium">
            <Link href="/">responsible gambling</Link>
          </li>
          <li className="uppercase lg:text-base md:text-sm text-xs text-white font-medium">
            <Link href="/">help</Link>
          </li>
          <li className="flex gap-4 items-center not">
            <span>
              <Image src={adult} alt={"+18"} />
            </span>
            <span>
              <Image src={rg} alt={"Responsible Gaming"} />
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
