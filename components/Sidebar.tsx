import Image from "next/image";
import Link from "next/link";
import Billard from "../public/assets/Tabs/billard.svg";
import Coins from "../public/assets/Tabs/coins.svg";
import Flag from "../public/assets/Tabs/raceFlag.svg";
import Security from "../public/assets/Tabs/security.svg";
import Rocket from "../public/assets/Tabs/spaceRocket.svg";
import Support from "../public/assets/Tabs/support.svg";
import Wheel from "../public/assets/Tabs/wheel.svg";

const Sidebar = ({ reponsponsiveProps, sidebarProps }: any) => {
  const Tab = ({ icon, desc, title, props }: any) => {
    return (
      <li
        className={`overflow-hidden group-hover:pr-20 border-b-[0.25px] border-[#55565A] mx-3 duration-200 transition-all`}
      >
        <Link
          className="py-4 flex justify-start items-center gap-7 md:px-2.5 sm:px-0"
          href=""
        >
          <Image
            src={icon}
            alt={desc}
            width={40}
            height={40}
            className={`w-[45px] ${props}`}
          />
          <h3
            className={`hover:text-white/70 uppercase text-white lg:text-lg sm:text-sm text-left sm:hidden sm:group-hover:block duration-75 transition-all md:pl-0.5 pl-1`}
          >
            {title}
          </h3>
        </Link>
      </li>
    );
  };
  return (
    <div
      className={`bg-[#1a1a1a] w-max min-h-full group ${sidebarProps} top-0 z-10 transition-all overflow-scroll fixed`}
    >
      <nav className="flex flex-col justify-start min-h-full items-center md:pt-32 sm:pt-[6.3rem] pt-[4.5rem] ">
        <ul className="h-full">
          <Tab icon={Coins} desc="Coins" title="Coins" props="md:p-2 p-2.5" />
          <Tab icon={Wheel} desc="Wheel" title="Wheel" props="md:p-1.5 p-2" />
          <Tab
            icon={Rocket}
            desc="Rocket"
            title="Rockets"
            props="md:p-2.5 p-3"
          />
          <Tab
            icon={Billard}
            desc="Billard"
            title="Billiard"
            props="md:p-2 p-2.5"
          />
          <Tab icon={Flag} desc="Flag" title="Race" props="md:p-1 p-1.5" />
          <Tab
            icon={Security}
            desc="Security"
            title="Security"
            props="md:p-2.5 p-3"
          />
          <li className="overflow-hidden group-hover:pr-20 mx-3 duration-200 transition-all mt-16">
            <Link
              className="py-5 flex justify-center items-center gap-7 md:px-2.5 sm:px-0"
              href="/"
            >
              <Image
                src={Support}
                alt="Support"
                width={40}
                height={40}
                className="md:p-2 p-2.5"
              />
              <h3 className="hover:text-white/70 uppercase text-white lg:text-lg sm:text-sm text-left hidden group-hover:block duration-75 transition-all md:pl-0.5 pl-1">
                Support
              </h3>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
