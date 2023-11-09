import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-full h-[calc(100vh-70px)] flex items-center justify-center flex-col ">
      <div className="text-[60px] font-bold ">Finance That Fits Your Life</div>
      <div className="font-semibold text-[20px] text-center ,t-[10px]">
        Seamlessly send and receive money, effortlessly transfer money, send
        money anywhere with ease, and <br /> take full control of your finances
        - all in giftPro
      </div>
      <Link to="/register">
        <button className="w-[120px] h-[40px] flex items-center justify-center hover:cursor-pointer duration-300 rounded-md bg-black text-white mt-[10px]">
          get started
        </button>
      </Link>
    </div>
  );
};

export default Landing;
