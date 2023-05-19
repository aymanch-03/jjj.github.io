import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Logo from "../public/assets/jjjLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t-2 border-white footer sm:px-16 px-5 py-16">
      <div className="rightSide">
        <div>
          <Link href="/" className="cursor-pointer">
            <div className="flex justify-start items-center">
              <Image
                src={Logo}
                alt="JJJ Logo"
                width={60}
                height={94}
                className="md:w-[60px] w-[40px]"
              />
              <h1 className="text-white font-semibold md:text-[18px] sm:text-[12px] pt-2 ml-1">
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
      </div>
    </footer>
  );
};

export default Footer;
