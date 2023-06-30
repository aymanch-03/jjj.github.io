import Image from "next/image";
import Logo from "../public/assets/jjjLogo.svg";
const LoadingPage = () => {
  return (
    <div className="bg-[#0b080b] flex h-full fixed w-full justify-center items-center z-100">
      <Image src={Logo} width={90} height={90} alt="JJJ" />
    </div>
  );
};

export default LoadingPage;
