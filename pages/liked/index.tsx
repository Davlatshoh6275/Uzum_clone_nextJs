import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img from "../../public/img/kalonka.png";
import hearts from "../../public/img/hearts.png";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

export default function Liked() {
  const [data, setData] = useState<any[]>([]);
  const [arrID, setArrId] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let arrId = JSON.parse(localStorage.getItem("id") || "[]");
    setArrId(arrId);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setArr(res.products));
  }, []);
  
  return (
    <div>
      <Navbar />
      {data.length !== 0 ? (
        <h1 className="sm:px-4  md:px-10 lg:px-14 xl:px-24 text-black text-3xl  sm:text-3xl font-semibold mb-10 ">
          Избранное
        </h1>
      ) : (
        ""
      )}

      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5  sm:px-4  md:px-10 lg:px-14 xl:px-24 gap-4 mb-5 ">
        {data.length !== 0 ? (
          data.map((item: any) => (
            // <Link href={`/liked/${item.id}`}>{item.name}</Link>
            <div key={item.id} className=" h-full mb-5  ">
              <div className="relative">
                <Link href={`/product/${item.id}`} className="z-0">
                  <div className="mb-3 relative ">
                    <Image
                      src={img}
                      alt=""
                      style={{ width: "100%", objectFit: "cover" }}
                      height={300}
                    />
                  </div>
                </Link>
                <AiOutlineHeart
                  className={`cursor-pointer absolute top-2 text-2xl right-2  z-100 `}
                  color={`${item.liked === true ? "red" : "#ACACAC"}`}
                />
              </div>

              <div className=" ">
                <h2 className="font-semibold text-black text-[14px] ">
                  {item.name}
                </h2>
                <div className="flex justify-between items-end ">
                  <div>
                    <del className="text-[18px] text-[#ACACAC] font-normal ">
                      {item.price} сум
                    </del>
                    <h3 className="text-[20px] text-black font-semibold">
                      {item.discountPrice} сум
                    </h3>
                  </div>
                  <div>
                    <CgShoppingCart className="border border-solid border-[#ACACAC] text-[32px] rounded-full p-2 cursor-pointer " />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full absolute left-0 top-[100px] h-[75vh] flex items-center justify-center flex-col ">
            <Image src={hearts} alt="img" />
            <h1 className="text-black text-3xl font-semibold ">
              Добавьте то, что понравилось
            </h1>
            <p className="text-black text-base font-medium">
              Перейдите на главную страницу и нажмите на ♡ в товаре На главную
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
