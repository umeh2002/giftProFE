import { useState } from "react";
import {  debitCard } from "../api/authApi";
import { useRecoilState } from "recoil";
import { user } from "../global/recoil";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Recieve = () => {
  const navigate = useNavigate()
  const [state, setState] = useRecoilState<any>(user);
  console.log(setState);
  const [email, setEmail] = useState<string | any>("");
  const [amount, setAmount] = useState<string | any>("");
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-slate-500">
      <div className="w-[400px] h-[300px] shadow-md bg-white text-black rounded-md p-3">
        <div className="mb-4">
          <div className="font-bold">email</div>
          <input
            type="text"
            placeholder="enter email"
            className="w-full h-[40px] pl-[10px] border outline-none rounded-md"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <div className="font-bold">amount</div>
          <input
            type="number"
            placeholder="enter amount"
            className="w-full h-[40px] pl-[10px] border outline-none rounded-md"
            value={amount}
            onChange={(e: any) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button
          className="w-full h-[40px] flex justify-center items-center bg-black text-white hover:cursor-pointer duration-300 transition-all rounded-md mt-[30px]"
          onClick={() => {
            debitCard(state, { amount, email }).then((res: any) => {
              if (res) {
                Swal.fire({
                  icon: "success",
                  title: "Payment",
                  text: "withdraw from wallet",
                  timerProgressBar: true,
                  timer: 3000,
                });
                navigate("/homepage")
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Payment",
                  text: "payment unsuccessful",
                  timerProgressBar: true,
                  timer: 3000,
                });
              }
            });
          }}
        >
          enter
        </button>
      </div>
    </div>
  );
};

export default Recieve;
