import React from "react";

const Statistics = () => {
  const Card = ({ title, stats }: any) => {
    return (
      <div className="p-6 rounded-[20px] bg-[#1D1D1D] w-full">
        <h3 className="text-white/60 lg:text-base md:text-sm sm:text-xs">
          {title}
        </h3>
        <h1 className="text-white lg:text-lg md:text-base sm:text-sm">
          {stats}
        </h1>
      </div>
    );
  };
  return (
    <div className="p-16">
      <h1 className="lg:text-lg md:text-base text-sm text-white uppercase">
        statistics
      </h1>
      <main className=" w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 grid flex-wrap">
        <Card title="TOTAL BETS PLACED" stats="2,542,671" />
        <Card title="TOTAL AMOUNT WAGED" stats="28,548,547.25" />
        <Card title="TOTAL AMOUNT WON" stats="18,254,678.20" />
      </main>
    </div>
  );
};

export default Statistics;
