import {useState} from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
    const [menu, Setmenu] = useState(false);

    const toggle_menu=()=>{
        Setmenu(!menu);
    }

    return( 
        <>
            <div className=" bg-black/70 backdrop-blur-sm text-slate-200 flex items-center justify-between fixed top-0 left-0 m-0 w-screen h-16">
                <div className=" flex h-16 lg:w-[50vw] md:w-[70vw] justify-around items-center">
                    <div className=" px-8 py-2">
                        Jetstar Gaming
                    </div>

                    <ul className=" sm:flex justify-between md:w-72 hidden">
                        <a href="/" className=" px-3 py-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                            Home
                        </a>
                        <a href="/" className=" px-3 py-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                            about us
                        </a>
                        <a href="/" className=" px-3 py-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                            Contact us
                        </a>
                    </ul>
                </div>
                <div className=" sm:block hidden  lg:w-[50vw] md:w-[30vw] lg:pr-[10vw] md:pr-[5vw] pr-10">
                    <ul className=" flex justify-end sm:gap-3 md:gap-5">
                        <a href="/" className=" px-3 py-2 cursor-pointer border hover:border-white/50 border-white/10 rounded-md opacity-100 transition-opacity">
                            Feedback
                        </a>
                        <a href="/" className=" px-3 py-2 cursor-pointer border hover:border-white/70 bg-white/80 hover:bg-transparent text-black hover:text-white border-white/0 rounded-md opacity-100 transition-all">
                            login
                        </a>
                    </ul>
                </div>
                <div className=" sm:hidden block p-2 text-lg cursor-pointer hover:text-xl mr-10"
                    onClick={()=>{toggle_menu()}}
                >
                    <AiOutlineMenu/>
                </div>
            </div>
            <div className={` transition-all fixed w-screen top-16 ${menu? '' : 'h-0'} sm:hidden bg-black/60 backdrop-blur-sm backdrop-contrast-75 overflow-hidden`}>
                <div className="flex flex-col text-white items-center pb-4">
                    <a href="/" className=" transition-colors py-3 hover:bg-white/10 w-full text-center cursor-pointer">Home</a>
                    <a href="/" className=" transition-colors py-3 hover:bg-white/10 w-full text-center cursor-pointer">About us</a>
                    <a href="/" className=" transition-colors py-3 hover:bg-white/10 w-full text-center cursor-pointer">Contact us</a>
                    <a href="/" className=" transition-colors py-3 hover:bg-white/10 w-full text-center cursor-pointer">Feedback</a>
                    <a href="/" className=" transition-colors py-3 hover:bg-white/10 w-full text-center cursor-pointer">login</a>
                </div>
            </div>
        </>
    );
}