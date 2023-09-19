import React, { useState, useEffect, useCallback } from "react";
import logo from "../styles/images/logo.png";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Link from "next/link";

interface Props {
  update: any;
}

const Navbar: React.FC<Props> = ({ update }: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [active, setActive] = useState(true);
  const [arrProduct, setArrProduct] = useState<any[]>([]);

  const [activeSearch, setActiveSearch] = useState<any>([]);

  const handleSearch = (e: any) => {
    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    } else {
      setActiveSearch(
        arrProduct
          .filter((item) =>
            item.description.toLowerCase().includes(e.target.value)
          )
          .slice(0, 8)
      );
    }
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("karzine") || "[]"));

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setArrProduct(res.products));
  }, []);

  return (
    <div
      className={`  w-[90%] sm:px-4 flex  mx-auto items-center justify-center  h-20 border-solid border-0 gap-5 `}
    >
      <div className="w-[100%] lg:w-[30%] ">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <button
        onClick={() => setActive(!active)}
        className=" hidden sm:hidden md:hidden lg:block  border-solid border-[#EAEAF9] border-2 py-2 px-4 rounded button_css bg-[#EAEAF9] "
      >
        Каталог
      </button>
      <div className="relative w-full  ">
        <input
          type="text"
          className="hidden sm:hidden md:hidden lg:block w-full  border-solid border-2 outline-none py-2 px-4 rounded color-[#9AA5AF] "
          placeholder="Искать товары"
          onChange={(e) => handleSearch(e)}
        />
        <FiSearch className=" hidden absolute right-3.5 top-3.5 sm:hidden md:hidden lg:block  " />
      </div>

      {activeSearch.length > 0 && (
        <div className="fixed h-full top-20 bg-state-800 flex flex-col text-black w-full rounded-xl left-0 z-20  ">
          <div className="w-full    z-100   bg-white py-12 px-80 ">
            <h2 className="text-base text-[#ACACAC] font-normal ">Поиск</h2>
            {activeSearch.map((item: any) => (
              <p
                key={item.id}
                className="text-black text-2xl mb-3 font-medium "
              >
                {item.brand}
              </p>
            ))}
          </div>
          <div className="w-full h-full    bg-opacity-75 bg-black"></div>
        </div>
      )}

      <div className="flex gap-4 lg:hidden ">
        <BiUser size="23px" />
        <Link href={"/liked"}>
          <AiOutlineHeart size="23px" />
        </Link>
        <Link href={"/carzin"}>
          <BsBag size="23px" />
        </Link>
      </div>
      <ul className=" hidden  sm:hidden md:hidden  lg:flex items-center justify-end gap-4 w-82 cursor-pointer ">
        <li className="flex gap-2 items-center text-xl font-medium ">
          <BiUser size="23px" /> Шахзод
        </li>

        <Link href={"/liked"}>
          <li className=" text-xl font-medium ">Избранное</li>
        </Link>
        <Link href={"/carzin"}>
          <li className=" flex text-xl font-medium gap-2 ">
            Корзина{" "}
            <span className="flex items-center justify-center border border-solid border-[#7000FF] w-7 h-7 rounded bg-[#7000FF] text-white ">
              {update}
            </span>
          </li>
        </Link>
      </ul>

      <div
        className={
          "w-full z-10 h-screen fixed top-20 " +
          (active == true ? "hidden" : "block")
        }
      >
        <div className="w-full  z-100 pt-8 bg-white absolute top-0" id="close">
          <div className="relative left-96">
            <p className="text-[#ACACAC] text-base font-medium mb-5 ">
              Категории товаров
            </p>
            <Link href={"#smartphones"}>
              <h1
                className="text-black text-3xl font-semibold mb-4 cursor-pointer"
                onClick={() => setActive(!active)}
              >
                Smartphones{" "}
                <span className="bg-[#7000FF] rounded-md text-base text-white font-normal px-2 py-[2px] ">
                  {" "}
                  5 товара
                </span>
              </h1>
            </Link>
            <Link href={"#laptops"}>
              <h1
                className="text-black text-3xl font-semibold mb-4 cursor-pointer"
                onClick={() => setActive(!active)}
              >
                Laptops{" "}
                <span className="bg-[#7000FF] rounded-md text-base text-white font-normal px-2 py-[2px] ">
                  {" "}
                  5 товара
                </span>
              </h1>
            </Link>
            <Link href={"#fragrances"}>
              <h1 className="text-black text-3xl font-semibold mb-4 cursor-pointer">
                Fragrances{" "}
                <span className="bg-[#7000FF] rounded-md text-base text-white font-normal px-2 py-[2px] ">
                  {" "}
                  5 товара
                </span>
              </h1>
            </Link>
            <Link href={"#skincare"}>
              <h1 className="text-black text-3xl font-semibold mb-4 cursor-pointer">
                Skincare{" "}
                <span className="bg-[#7000FF] rounded-md text-base text-white font-normal px-2 py-[2px] ">
                  {" "}
                  5 товара
                </span>
              </h1>
            </Link>
            <Link href={"#groceries"}>
              <h1 className="text-black text-3xl font-semibold mb-4 cursor-pointer">
                Groceries{" "}
                <span className="bg-[#7000FF] rounded-md text-base text-white font-normal px-2 py-[2px] ">
                  {" "}
                  5 товара
                </span>
              </h1>
            </Link>
            <Link href={"#decoration"}>
              <h1 className="text-black text-3xl font-semibold mb-4 cursor-pointer">
                Home Decoration{" "}
                <span className="bg-[#7000FF] rounded-md text-base text-white font-normal px-2 py-[2px] ">
                  {" "}
                  5 товара
                </span>
              </h1>
            </Link>
          </div>
        </div>
        <div
          className="w-full h-full -z-10 absolute bottom-0  bg-opacity-75 bg-black"
          onClick={(e) => {
            setActive(!active);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
