import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

import logo from '../assets/logo.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export const Menu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

    return (
        <header className="bg-white w-full h-20 items-center justify-between flex p-5 mb-5">
            <img className="w-12 h-12 rounded-lg" src={logo}/>
            <nav className="items-center w-8/12 hidden lg:block">
                  <ul className="flex items-center">
                    <li className="text-gray-500 text-lg font-semibold text-center p-5">
                      <a className="hover:underline transition-all duration-300 flex justify-center items-center text-blue-500 underline" href="#">Código QR&nbsp;<MdOutlineKeyboardArrowDown /></a>
                    </li>
                    <li className="text-gray-500 text-lg font-semibold text-center p-5">
                      <a className="hover:underline transition-all duration-300" href="#">Precificação</a>
                    </li>
                    <li className="text-gray-500 text-lg font-semibold text-center p-5">
                      <a className="hover:underline transition-all duration-300" href="#">Sobre nós</a>
                    </li>
                    <li className="text-gray-500 text-lg font-semibold text-center p-5">
                      <a className="hover:underline transition-all duration-300" href="#">Contacte-nos</a>
                    </li>
                  </ul>
                </nav>
                 <div className="flex itens-center gap-5 lg:flex md:hidden sm:block justify-between items-center p-2 rounded-lg">
                  <span className="hover:underline transition-all sm:hidden lg:block duration-300 font-semibold hover:text-blue-500">
                    <FaUser className="w-5 h-5 cursor-pointer" /></span>
                  <button
                    className="bg-blue-600 text-white rounded-lg w-60 h-15 sm:hidden lg:block flex justify-center items-center hover:bg-blue-700 transition-all duration-300">
                    Comece a avaliação gratuita
                  </button>
                </div>
            <div className="relative flex gap-2 items-center lg:hidden">
                <span className="hover:underline transition-all duration-300 font-semibold hover:text-blue-500">
                    <FaUser className="w-5 h-5 cursor-pointer" /></span>
                <button onClick={toggleMenu} className="p-2 text-black hover:blue-500 transition-all duration-300">
                    {open ? <GiCancel className="w-10 h-10" /> : <IoMenu className="w-10 h-10" />}
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                        <ul className="flex flex-col text-black">
                            <li className="p-3 hover:bg-gray-100 cursor-pointer">Código QR</li>
                            <li className="p-3 hover:bg-gray-100 cursor-pointer">Precificação</li>
                            <li className="p-3 hover:bg-gray-100 cursor-pointer">Sobre nós</li>
                            <li className="p-3 hover:bg-gray-100 cursor-pointer">Contacte-nos</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};