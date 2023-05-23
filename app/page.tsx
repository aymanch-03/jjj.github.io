import MainSlider from "@/components/MainSlider";
import Originals from "@/components/Originals";
import Statistics from "@/components/Statistics";

const Home = () => {
  return (
    <>
      <div className="md:ml-[90px] sm:ml-[4.5rem] mx-auto">
        <MainSlider />
        <Originals />
        <Statistics />
      </div>
    </>
  );
};

export default Home;
