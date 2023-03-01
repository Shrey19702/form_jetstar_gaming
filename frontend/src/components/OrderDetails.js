import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios"

export default function OrderDetails({form_state}) {
    const [orders, SetOrders] = useState();
    const [Total, SetTotal] = useState(0);

    useEffect(() => {
        const f_data = async () => {
            if(!orders){
                try {
                    const res = await axios.get(`http://localhost:8000/api/order-data`);
                    let t=0
                    for(let i=0; i<res.data.order.length; i++){
                        t+= res.data.order[i].rent;
                    }
                    SetTotal(t)
                    SetOrders(res.data);
                } catch (error) {
                    console.log("ERROR Occured in fetching data")
                }
            }
        }
        f_data();
    })

    const data_recieved = () => (
        <>
            <div className=" text-2xl pb-5"> Order Details</div>
            <div className="flex justify-between flex-wrap">
                <div className="px-4">Order ID: {orders.order_id}</div>
                <div className="px-4">Date: {orders.date}</div>
            </div>
            <div className="overflow-auto mt-5 rounded-lg shadow hidden md:block">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
                            <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">Return date</th>
                            <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">Rent</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {
                            orders.order.map((item, idx) => (
                                <tr key={idx} className="odd:bg-white even:bg-slate-50">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <a href="/#" className="font-bold text-blue-500 hover:underline">{item.id}</a>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.name}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.rent_time}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">₹{item.rent}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {
                    orders.order.map((item, idx) => (
                        <div key={idx} className="bg-white space-y-3 p-4 rounded-lg shadow">
                            <div className="flex items-center justify-between space-x-2 text-sm">
                                <div>
                                    <a href="/#" className="text-blue-500 font-bold hover:underline">#{item.id}</a>
                                </div>
                                <div className="text-gray-500"><span className=" text-black font-semibold">return on:</span> {item.rent_time}</div>
                            </div>
                            <div className="text-sm text-gray-700">{item.name}</div>
                            <div className="text-sm font-medium text-black">₹{item.rent}</div>
                        </div>
                    ))
                }
            </div>

            <div className=" text-right py-5"> <span className=" font-semibold">Total:</span> <span className=" inline-block w-28">₹{Total}</span> </div>
            <div className=" ml-auto mt-4 w-fit px-4 py-3 flex items-center gap-2 cursor-pointer font-semibold hover:bg-black/80 hover:text-white bg-black/10 rounded-md transition-all"
                onClick={()=>{form_state(2)}}
            > 
                    Continue <FaArrowAltCircleRight/>
            </div>
        </>
    )

    return (
        <>
            <div>
                {orders ? data_recieved() : (<div> no data recieved</div>)}
            </div>

        </>
    );
}