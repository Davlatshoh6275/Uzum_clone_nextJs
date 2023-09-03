import React from "react";
import logo from "../styles/images/logo.png";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div
      className={` w-[90%] sm:px-4 flex  mx-auto items-center justify-center  h-20 border-solid border-0 gap-5 `}
    >
      <div className="w-[70%] lg:w-[30%] ">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-250px " />
        </Link>
      </div>
      <button className=" hidden sm:hidden md:hidden lg:block  border-solid border-[#EAEAF9] border-2 py-2 px-4 rounded button_css bg-[#EAEAF9] ">
        Каталог
      </button>
      <div className="relative w-full  ">
        <input
          type="text"
          className="hidden sm:hidden md:hidden lg:block w-full  border-solid border-2 outline-none py-2 px-4 rounded color-[#9AA5AF] "
          placeholder="Искать товары"
        />
        <FiSearch className=" hidden absolute right-3.5 top-3.5 sm:hidden md:hidden lg:block  " />
      </div>
      <div className="flex gap-4 lg:hidden ">
        <BiUser size="23px" />
        <AiOutlineHeart size="23px" />
        <BsBag size="23px" />
      </div>
      <ul className=" hidden  sm:hidden md:hidden  lg:flex items-center justify-end gap-4 w-82 cursor-pointer ">
        <li className="flex gap-2 items-center text-xl font-medium ">
          <BiUser size="23px" /> Шахзод
        </li>
        <Link href={"/liked"} >
          <li className=" text-xl font-medium ">Избранное</li>
        </Link>
        <li className=" flex text-xl font-medium gap-2 ">
          Корзина{" "}
          <span className="flex items-center justify-center border border-solid border-[#7000FF] w-7 h-7 rounded bg-[#7000FF] text-white ">
            3
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
