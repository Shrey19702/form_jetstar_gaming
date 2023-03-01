import { useState } from "react";
import OrderDetails from "./OrderDetails";
import PaymentDetails from "./PaymentDetails";
import UserDetails from "./UserDetails";

export default function FormInput() {
    const [curr_state, SetCurr_state] = useState(1);    // 1-> order details, 2-> user details, 3-> payment details
    return (
        <>
            <div className="flex justify-center w-full h-full ">

                <div className="w-full lg:w-3/4 xl:w-8/12 px-4 pt-20">
                    <div className="bg-white rounded-lg p-8 sm:p-12 shadow-lg">
                        {curr_state === 1 ? <OrderDetails form_state={SetCurr_state} />
                            : curr_state === 2 ? <UserDetails form_state={SetCurr_state} />
                                : <PaymentDetails form_state={SetCurr_state} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}