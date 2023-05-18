import Originals from "@/components/Originals";
import Sidebar from "@/components/Sidebar";
import Statistics from "@/components/Statistics";

const Home = () => {
  return (
    <>
      <div className="md:ml-24 sm:ml-[4.5rem] mx-auto">
        <Originals />
        <Statistics />
      </div>
    </>
  );
};

export default Home;
