import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[70px] flex justify-center items-center">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div className="text-black text-[30px] font-bold cursor-pointer">
          giftPro
        </div>
        <Link to="/register">
          <button className="w-[100px] h-[40px] flex justify-center items-center bg-black text-white hover:cursor-pointer duration-500 transition-all rounded-md">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
