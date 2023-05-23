import Link from "next/link";

const Originals = () => {
  const Games = () => {
    return (
      <Link href="/">
        <div className="lg:h-[359px] md:h-[300px] sm:h-[250px] h-[200px] bg-[#A4A4A4] hover:scale-105 transition-all cursor-pointer"></div>
      </Link>
    );
  };
  return (
    <div className="sm:px-12 px-5 py-12 ">
      <div className="w-full items-center flex justify-between">
        <h1 className="md:text-2xl text-lg text-white font-semibold uppercase">
          {"Jira's originals"}
        </h1>
        <p className="md:text-lg text-base text-white/50 font-light uppercase cursor-pointer hover:text-white/80 all transition-all relative">
          <Link href="/">View all</Link>
        </p>
      </div>
      <main className="w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 sm:gap-4 gap-2 gap-y-2 grid flex-wrap py-9 overflow-auto">
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
      </main>
    </div>
  );
};

export default Originals;
