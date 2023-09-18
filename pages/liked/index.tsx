import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img from "../../public/img/kalonka.png";
import hearts from "../../public/img/hearts.png";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

export default function Liked() {
  const [dataArr, setData] = useState<any[]>([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("liked") || "[]");
    setData(data);
  }, []);

  const delLiked = (item: any ) => {
    let a = dataArr.filter(i => i.id !== item.id)

    localStorage.setItem("liked", JSON.stringify(a));
    
    setData(a)
  }
   

  return (
    <div>
      <Navbar update={update} />
      {dataArr.length !== 0 ? (
        <h1 className="sm:px-4  md:px-10 lg:px-14 xl:px-24 text-black text-3xl  sm:text-3xl font-semibold mb-10 ">
          Избранное
        </h1>
      ) : (
        ""
      )}

      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5  sm:px-4  md:px-10 lg:px-14 xl:px-24 gap-4 mb-5 ">
        {dataArr.length !== 0 ? (
          dataArr.map((item: any) => (
            <div key={item.id} className=" h-full w-82 rounded-xl p-5 mb-5 border-2 border-solid border-[#E5E7EB] ">
              <div className="relative">
                <Link href={`/product/${item.id}`} className="z-0">
                  <div className=" h-72  mb-3 relative ">
                    <img
                      src={item.images[0]}
                      alt="img"
                      className="h-full"
                    />
                  </div>
                </Link>
                <AiOutlineHeart
                  className={`cursor-pointer absolute top-2 text-2xl right-2  z-100 `}
                  color='red'
                  onClick={() => delLiked(item)}
                />
              </div>

              <div className=" ">
                <h2 className="font-semibold text-black text-[14px] ">
                  {item.brand}
                </h2>
                <div className="flex justify-between items-end ">
                  <div>
                    {/* <del className="text-[18px] text-[#ACACAC] font-normal ">
                      {item.price} сум
                    </del> */}
                    <h3 className="text-[20px] text-black font-semibold">
                      {item.price} сум
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
