import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import img from "../public/img/kalonka.png";
import Link from "next/link";

export default function Item(props: any) {
  const item = props.item;
  const [isLiked, setIsLiked] = useState();

  const itemLiked = (id: any) => {
    let arrID: any = JSON.parse(localStorage.getItem("id") || "[]");
    arrID.push(id);
    localStorage.setItem("id", JSON.stringify(arrID));

    setIsLiked(arrID.includes(id));
  };

  const itemCarzine = (i: any) => {
    let karzine: any = JSON.parse(localStorage.getItem("karzine") || "[]");
    let prices : any = JSON.parse(localStorage.getItem("prices") || "[]");
    karzine.push(i);
    prices.push({
      id: i.id,
      price: parseFloat(i.price)
    })

    localStorage.setItem("karzine", JSON.stringify(karzine));
    localStorage.setItem("prices", JSON.stringify(prices));
  };

  return (
    <div>
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
            onClick={() => itemLiked(item.id)}
            className={`cursor-pointer absolute top-2 text-2xl right-2  z-100 `}
            color={isLiked ? "red" : "#ACACAC"}
          />
        </div>

        <div className=" ">
          <h2 className="font-semibold text-black text-[14px] ">{item.name}</h2>
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
              <CgShoppingCart
                className="border border-solid border-[#ACACAC] text-[32px] rounded-full p-2 cursor-pointer "
                onClick={() => itemCarzine(item)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
