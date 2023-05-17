import Image from "next/image";
import Link from "next/link";
import Billard from "../public/assets/Tabs/billard.svg";
import Coins from "../public/assets/Tabs/coins.svg";
import Flag from "../public/assets/Tabs/raceFlag.svg";
import Security from "../public/assets/Tabs/security.svg";
import Rocket from "../public/assets/Tabs/spaceRocket.svg";
import Support from "../public/assets/Tabs/support.svg";
import Wheel from "../public/assets/Tabs/wheel.svg";

const Sidebar = () => {
  const Tab = ({ icon, desc, w, h, title }: any) => {
    return (
      <li className="overflow-hidden group-hover:pr-20 border-b-[0.25px] border-[#55565A] mx-3 duration-200 transition-all">
        <Link
          className="py-5 flex justify-start items-center gap-7 md:px-3.5 sm:px-0"
          href="/coinsPage"
        >
          <Image
            src={icon}
            alt={desc}
            width={40}
            height={40}
            className="p-1.5"
          />
          <h3 className="hover:text-white/70 uppercase text-white lg:text-lg sm:text-sm text-left  hidden group-hover:block duration-75 transition-all">
            {title}
          </h3>
        </Link>
      </li>
    );
  };
  return (
    <div className="bg-[#1a1a1a] w-max group h-full top-0 left-0 z-10 duration-200 transition-all hover:overflow-scroll overflow-auto absolute">
      <nav className="flex flex-col justify-start items-center h-full md:mt-36 sm:mt-[6.3rem] mt-[4.5rem]">
        <ul>
          <Tab icon={Coins} desc="Coins" title="Coins" />
          <Tab icon={Wheel} desc="Wheel" title="Wheel" />
          <Tab icon={Rocket} desc="Rocket" title="Rockets" />
          <Tab icon={Billard} desc="Billard" title="Billiard" />
          <Tab icon={Flag} desc="Flag" title="Race" />
          <Tab icon={Security} desc="Security" title="Security" />
        </ul>
        <ul className="overflow-hidden self-start">
          <li className="overflow-hidden group-hover:pr-20 mx-3 duration-200 transition-all mt-16">
            <Link
              className="py-5 flex justify-start items-center gap-7 md:px-3.5 sm:px-0"
              href="/coinsPage"
            >
              <Image
                src={Support}
                alt="Support"
                width={40}
                height={40}
                className="p-1.5"
              />
              <h3 className="hover:text-white/70 uppercase text-white lg:text-lg sm:text-sm text-left hidden group-hover:block duration-75 transition-all">
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
