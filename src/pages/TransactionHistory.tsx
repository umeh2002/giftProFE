import { useRecoilState } from "recoil";
import { user } from "../global/recoil";
import { getTransactionHistory } from "../hooks/Tanstack";


const TransactionHistory = () => {
    const [state, setState] = useRecoilState<any>(user);

    console.log(setState)
    const {data} = getTransactionHistory(state)

    console.log(data)
  return (
    <div className="w-full min-h-[100vh] p-3">
        <div className="flex flex-wrap">
           {
            data?.map((props:any)=>(
                <div className="w-[350px] h-[130px] border rounded-md p-2 m-3" key={props._id}>
                <div className="flex items-center mb-2">
                    <div className="text-[17px] font-semibold">Email :</div>
                    <div className=" font-bold">{props.email}</div>
                </div>
                <div className="flex items-center mb-2">
                    <div className="text-[17px] font-semibold">Amount :</div>
                    <div className=" font-bold">₦{props.amount}</div>
                </div>
                <div className="flex items-center mb-2">
                    <div className="text-[17px] font-semibold">Transaction :</div>
                    <div className=" font-bold">{props.typeOfTransaction}</div>
                </div>
            </div>
            ))
           }
        </div>
    </div>
  )
}

export default TransactionHistory