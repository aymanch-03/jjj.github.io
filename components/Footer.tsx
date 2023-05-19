import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import adult from "../public/assets/18.svg";
import Logo from "../public/assets/jjjLogo.svg";
import rg from "../public/assets/rg.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t-2 border-white sm:px-16 px-5 py-16 grid grid-cols-1 gap-40 lg:grid-cols-2">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="lg:space-y-12 md:space-y-8 space-y-4">
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
          <div className="flex items-center justify-start gap-3">
            <span className="text-[#1a1a1a] p-1.5 rounded-full bg-primary">
              <BsTwitter size={22} />
            </span>
            <span className="text-[#1a1a1a] p-1.5 rounded-full bg-primary">
              <BsDiscord size={22} />
            </span>
            <span className="text-[#1a1a1a] p-1.5 rounded-full bg-primary">
              <FaTelegramPlane size={22} />
            </span>
          </div>
        </div>
        <p className=" text-white lg:text-base md:text-sm text-xs">
          Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sint beatae pariatur molestias non
          commodi? Distinctio.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 links">
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
          <li className="flex gap-4 items-center">
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
