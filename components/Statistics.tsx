import Image from "next/image";
import Coin from "../public/assets/coin.svg";
const Statistics = () => {
  const Card = ({ title, stats }: any) => {
    return (
      <div className="p-8 rounded-[20px] bg-[#1D1D1D] w-full">
        <h3 className="text-white/60 md:text-lg text-base font-normal">
          {title}
        </h3>
        <div className="flex items-center justify-start gap-2.5 pt-5">
          <Image src={Coin} alt="coin" width={30} height={30} />
          <h1 className="text-white md:text-2xl text-lg font-medium">
            {stats}
          </h1>
        </div>
      </div>
    );
  };
  return (
    <div className="sm:px-16 px-5 py-16 border-y-[0.5px] border-[#fff]/40">
      <h1 className=" md:text-2xl text-xl text-white font-semibold uppercase">
        statistics
      </h1>
      <main className="w-full grid-cols-1 lg:grid-cols-3 gap-7 grid flex-wrap py-8">
        <div className="p-8 rounded-[20px] bg-[#1D1D1D] w-full">
          <h3 className="text-white/60 md:text-lg text-base font-normal">
            TOTAL BETS PLACED
          </h3>
          <h1 className="text-white md:text-2xl text-lg pt-5 font-medium">
            2,542,671
          </h1>
        </div>
        <Card title="TOTAL AMOUNT WAGED" stats="28,548,547.25" />
        <Card title="TOTAL AMOUNT WON" stats="18,254,678.20" />
      </main>
    </div>
  );
};

export default Statistics;
