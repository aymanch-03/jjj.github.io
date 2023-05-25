import Image from "next/image";

import Billard from "../../public/assets/Tabs/billard.svg";
import Coins from "../../public/assets/Tabs/coins.svg";
import Flag from "../../public/assets/Tabs/raceFlag.svg";
import Security from "../../public/assets/Tabs/security.svg";
import Rocket from "../../public/assets/Tabs/spaceRocket.svg";
import Support from "../../public/assets/Tabs/support.svg";
import Wheel from "../../public/assets/Tabs/wheel.svg";
import Coin from "../../public/assets/coin.svg";

const LuckyBets = () => {
  const HistoryData = ({
    Game,
    Dueler,
    Time,
    Wager,
    Multiplier,
    Payout,
    imgSrc,
  }: any) => {
    return (
      <tr className="h-[70px] bg-[#1d1d1d] my-3 rounded-[10px]">
        <td className="font-light pl-8  gap-6 text-base align-middle flex items-center mt-[19px]">
          <Image src={imgSrc} alt={Game} width={30} height={30} className="" />
          {Game}
        </td>
        <td className="font-light text-center text-base">{Dueler}</td>
        <td className="font-light text-center text-base">{Time}</td>
        <td className="font-light text-center gap-2 text-base flex justify-center">
          <Image src={Coin} alt="coin" width={15} height={15} />
          {Wager}
        </td>
        <td className="font-light text-center text-base">{Multiplier}</td>
        <td className="font-light text-center gap-2 text-base flex justify-center">
          <Image src={Coin} alt="coin" width={15} height={15} />
          {Payout}
        </td>
      </tr>
    );
  };
  return (
    <section className="w-[100%] h-[90vh] overflow-auto my-9">
      <div className="md:w-[100%] w-[170%] max-h-[89%] overflow-auto scroll">
        <table className="w-full overflow-x-auto mx-auto">
          <thead className="w-full bg-[#111] h-[70px] sticky top-0 left-0">
            <tr className="text-white text-left  uppercase">
              <th className="font-light pl-8 rounded-l-[10px] md:text-lg text-base">
                Game
              </th>
              <th className="font-light text-center md:text-lg text-base">
                Dueler
              </th>
              <th className="font-light text-center md:text-lg text-base">
                Time
              </th>
              <th className="font-light text-center md:text-lg text-base">
                Wager
              </th>
              <th className="font-light text-center md:text-lg text-base">
                Multiplier
              </th>
              <th className="font-light text-center rounded-r-[10px] md:text-lg text-base">
                {" "}
                Payout
              </th>
            </tr>
          </thead>

          <tbody className="text-white w-[95%] max-h-[23rem] overflow-auto mx-auto space-y-3">
            <HistoryData
              imgSrc={Coins}
              Game="Coins"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Wheel}
              Game="Wheel"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
            <HistoryData
              imgSrc={Flag}
              Game="Flag"
              Dueler="Stake"
              Time="1s"
              Wager="0.10"
              Multiplier="0.20x"
              Payout="0.02"
            />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LuckyBets;
