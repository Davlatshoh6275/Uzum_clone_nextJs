import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../public/img/kalonka.png";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

const inter = Montserrat({ subsets: ["latin"] });

const Producs: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("./api/hello")
      .then((res) => res.json())
      .then(
        (res) => setData(res.producs)
        // (res = res.producs.filter(
        //   (item: any) => item.category === "Популярное"
        // )),
        // setData(res)
      );
  }, []);

  const itemLiked = (id: any) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        if (data[i].liked === false) {
          data[i].liked = true;
          console.log(data[i]);
        } else {
          console.log(data[i]);
          data[i].liked = false;
        }
      }
    }
  };

  return (
    <div className="w-[100%] m-0 mx-auto sm:px-4  md:px-10 lg:px-14 xl:px-24 ">
      <h1
        className={`text-black text-3xl  sm:text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Популярное
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item, index) =>
          item.category === "Популярное" ? (
            <div key={index} className=" h-full mb-5  ">
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
                  onClick={() => itemLiked(item.id)}
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
          ) : (
            ""
          )
        )}
      </div>
      <div className="flex items-center justify-center mb-10">
        <button className="text-[#33C] text-[20px] font-semibold border border-solid  rounded px-3 py-2 bg-[#EAEAF9]  ">
          Показать еще 20
        </button>
      </div>
      <h1
        className={`text-black text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Спортивная одежда
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item, index) =>
          item.category === "Спортивная одежда" ? (
            <div key={index} className=" h-full ">
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
                  onClick={() => itemLiked(item.id)}
                  className=" cursor-pointer absolute top-2 text-2xl right-2 text-[#ACACAC]  z-100  "
                />
              </div>

              <div>
                <h2 className="font-semibold text-black text-[14px] ">
                  {item.name}
                </h2>
                <div className="flex justify-between items-end ">
                  <div>
                    <del className="text-[16px] text-[#ACACAC] font-normal ">
                      {item.price} сум
                    </del>
                    <h3 className="text-[18px] text-black font-semibold">
                      {item.discountPrice} сум
                    </h3>
                  </div>
                  <div>
                    <CgShoppingCart className="border border-solid border-[#ACACAC] text-[32px] rounded-full p-2 cursor-pointer " />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <h1
        className={`text-black text-3xl font-semibold  mb-10 ${inter.className}`}
      >
        Активный отдых
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item, index) =>
          item.category === "Активный отдых" ? (
            <div key={index} className=" h-full ">
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
                  onClick={() => itemLiked(item.id)}
                  className=" cursor-pointer absolute top-2 text-2xl right-2 text-[#ACACAC]  z-100"
                />
              </div>

              <div>
                <h2 className="font-semibold text-black text-[14px] ">
                  {item.name}
                </h2>
                <div className="flex justify-between items-end ">
                  <div>
                    <del className="text-[16px] text-[#ACACAC] font-normal ">
                      {item.price} сум
                    </del>
                    <h3 className="text-[18px] text-black font-semibold">
                      {item.discountPrice} сум
                    </h3>
                  </div>
                  <div>
                    <CgShoppingCart className="border border-solid border-[#ACACAC] text-[32px] rounded-full p-2 cursor-pointer " />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <h1
        className={`text-black text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Спортивная одежда
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item, index) =>
          item.category === "Спортивная одежда" ? (
            <div key={index} className=" h-full ">
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
                  onClick={() => itemLiked(item.id)}
                  className=" cursor-pointer absolute top-2 text-2xl right-2 text-[#ACACAC]  z-100 "
                />
              </div>

              <div>
                <h2 className="font-semibold text-black text-[14px] ">
                  {item.name}
                </h2>
                <div className="flex justify-between items-end ">
                  <div>
                    <del className="text-[16px] text-[#ACACAC] font-normal ">
                      {item.price} сум
                    </del>
                    <h3 className="text-[18px] text-black font-semibold">
                      {item.discountPrice} сум
                    </h3>
                  </div>
                  <div>
                    <CgShoppingCart className="border border-solid border-[#ACACAC] text-[32px] rounded-full p-2 cursor-pointer " />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <h1
        className={`text-black text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Активный отдых
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item, index) =>
          item.category === "Активный отдых" ? (
            <div key={index} className=" h-full ">
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
                  onClick={() => itemLiked(item.id)}
                  className=" cursor-pointer absolute top-2 text-2xl right-2 text-[#ACACAC]  z-100 "
                />
              </div>

              <div>
                <h2 className="font-semibold text-black text-[14px] ">
                  {item.name}
                </h2>
                <div className="flex justify-between items-end ">
                  <div>
                    <del className="text-[16px] text-[#ACACAC] font-normal ">
                      {item.discountPrice} сум
                    </del>
                    <h3 className="text-[18px] text-black font-semibold">
                      {item.price} сум
                    </h3>
                  </div>
                  <div>
                    <CgShoppingCart className="border border-solid border-[#ACACAC] text-[32px] rounded-full p-2 cursor-pointer " />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Producs;
