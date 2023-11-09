import { useState } from "react";
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { user } from "../global/recoil";
import { getUserTask } from "../hooks/Tanstack";
const Hero = () => {
  const [state, setState] = useRecoilState<any>(user);
  console.log(setState);
  const { data } = getUserTask(state);
  const [show, setShow] = useState<boolean>(false);

  const onToggle = () => {
    setShow(!show);
  };
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="w-[400px] h-[400px]  rounded-md shadow-md bg-white text-black p-4">
        <div className="flex justify-between items-center ">
          <div>
            <span className="font-semibold">Wallet:</span>
            <div className="flex items-center">
              {show ? (
                <div className="text-[20px] font-bold">₦{data.wallet}</div>
              ) : (
                <div className="text-[20px] font-bold">*****</div>
              )}
              <div className="ml-[20px] hover:cursor-pointer duration-300 transition-all text-[17px]">
                {show ? (
                  <PiEyeLight onClick={onToggle} />
                ) : (
                  <PiEyeClosedLight onClick={onToggle} />
                )}
              </div>
            </div>
          </div>
          <div className="text-[17px] font-semibold"></div>
        </div>

        <br />
        <br />
        <br />
        <div className="flex justify-between items-center">
          <Link to="/transfer">
          <button className="w-[120px] h-[40px] flex justify-center items-center hover:cursor-pointer transition-all duration-500 bg-black text-white rounded-md">
            credit wallet
          </button>
          </Link>

          <Link to="/withdraw">
          <button className="w-[140px] h-[40px] flex justify-center items-center hover:cursor-pointer transition-all duration-500 bg-red-600 text-white rounded-md">
            withdraw money
          </button>
          </Link>
        </div>

        <br />
        <br />
        <br />
        <Link to="/history">
          <div className="text-center text-[20px] font-semibold hover:cursor-pointer duration-300 transition-all">
            view transaction history
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
