import { FaPlay } from "react-icons/fa";

const GamesContent = ({ title }: any) => {
  return (
    <div>
      <FaPlay
        size={40}
        className="-translate-x-2/4 translate-y-0 left-[120%] group-hover:left-1/2 relative transition-all text-white top-[36px] group-hover:opacity-100 opacity-0"
      />
      <h3 className="uppercase text-white font-medium absolute right-0 bottom-0 text-xl px-6 transition-all group-hover:py-5 py-3">
        {title}
      </h3>
    </div>
  );
};

export default GamesContent;
