"use client";
import { SetStateAction, useState } from "react";
import AllBets from "./GameHistoryTabs/AllBets";
import HighRollers from "./GameHistoryTabs/HighRollers";
import Jackpot from "./GameHistoryTabs/Jackpot";
import LuckyBets from "./GameHistoryTabs/LuckyBets";

const HistoryTable = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className=" px-5 py-12 max-w-[85rem] mx-auto">
      <div className="md:flex items-center justify-between">
        <h1 className=" md:text-2xl text-xl text-white font-semibold uppercase">
          game history
        </h1>
        <div className="text-white flex items-center justify-evenly md:w-2/3 w-full md:mt-0 mt-5">
          <div
            className={`cursor-pointer text-center uppercase font-normal md:text-xl sm:text-lg text-base transition-all ${
              activeTab === 0 ? "activeTab relative text-primary" : ""
            }`}
            onClick={() => handleTabClick(0)}
          >
            all bets
          </div>
          <div
            className={`cursor-pointer text-center uppercase font-normal md:text-xl sm:text-lg text-base transition-all  ${
              activeTab === 1 ? "activeTab relative text-primary" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            jackpot
          </div>
          <div
            className={`cursor-pointer text-center uppercase font-normal md:text-xl sm:text-lg text-base transition-all  ${
              activeTab === 2 ? "activeTab relative text-primary" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            high rollers
          </div>
          <div
            className={`cursor-pointer text-center uppercase font-normal md:text-xl sm:text-lg text-base transition-all  ${
              activeTab === 3 ? "activeTab relative text-primary" : ""
            }`}
            onClick={() => handleTabClick(3)}
          >
            lucky bets
          </div>
        </div>
      </div>

      {activeTab === 0 && <AllBets />}
      {activeTab === 1 && <Jackpot />}
      {activeTab === 2 && <HighRollers />}
      {activeTab === 3 && <LuckyBets />}
    </div>
  );
};

export default HistoryTable;
