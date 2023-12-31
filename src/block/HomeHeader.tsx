import { useRecoilState } from "recoil"
import { userState } from "../global/recoil"


const HomeHeader = () => {
  const [state, setState] = useRecoilState(userState)
  console.log("header",state)
  return (
    <div className="w-full h-[70px] flex items-center justify-center bg-white text-black border-b-2 shadow-sm">
        <div className="w-[90%] h-full flex justify-between items-center">
            <div className="text-black text-[30px] font-bold cursor-pointer">giftPro</div>
            <button className="w-[100px] h-[40px] flex items-center justify-center bg-black text-white hover:cursor-pointer duration-500 transition-all rounded-md"
            onClick={()=>{
              setState(null)
              console.log("happy transition")
            }}
            >Log out</button>
        </div>
    </div>
  )
}

export default HomeHeader