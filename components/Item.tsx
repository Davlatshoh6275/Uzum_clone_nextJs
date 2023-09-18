/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

export default function Item(props: any) {
  const { item, cartUpdate, update } = props;
  const [isLiked, setIsLiked] = useState<any>(false);
  const [active, setActive] = useState<any>(false)
  let a = 0;

  function persantagePrice() {
    let price = (item.price / 100) * item.discountPercentage;
    let p = item.price - Math.round(price);
    a = p;
  }

  const itemLiked = (item: any) => {
    let arrLiked: any = JSON.parse(localStorage.getItem("liked") || "[]");

    if (!isLiked) {
      arrLiked.push(item);
      localStorage.setItem("liked", JSON.stringify(arrLiked));
    } else {
      let a = arrLiked.filter((i: any) => i.id !== item.id);
      localStorage.setItem("liked", JSON.stringify(a));
    }

    setIsLiked(!isLiked);

  };

  const itemCarzine = (i: any) => {
    let karzine: any = JSON.parse(localStorage.getItem("karzine") || "[]");
    let prices: any = JSON.parse(localStorage.getItem("prices") || "[]");

    if(!active) {

      i.count = 1;
  
      karzine.push(i);
      prices.push({
        id: i.id,
        price: a,
        realPrice: item.price,
      });
  
      cartUpdate(update + 1);
      
      localStorage.setItem("karzine", JSON.stringify(karzine));
      localStorage.setItem("prices", JSON.stringify(prices));
    } else {
      let a = karzine.filter((item: any) => item.id !== i.id);
      let b = prices.filter((item: any) => item.id !== i.id);
      localStorage.setItem("karzine", JSON.stringify(a));
      localStorage.setItem("prices", JSON.stringify(b));
      cartUpdate(update - 1);
    }

    setActive(!active)
  };

  persantagePrice();
  return (
    <div>
      <div key={item.id} className=" h-full mb-5  ">
        <div className="relative">
          <Link href={`/product/${item.id}`} className="z-0">
            <div className="mb-3 relative bg-[#efefef] rounded-xl ">
              <img
                src={item.images[1]}
                alt=""
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </Link>
          {isLiked ? (
            <AiFillHeart
              onClick={() => itemLiked(item)}
              className={`cursor-pointer absolute top-2 text-2xl right-2  z-100 `}
              color={"red"}
            />
          ) : (
            <AiOutlineHeart
              onClick={() => itemLiked(item)}
              className={`cursor-pointer absolute top-2 text-2xl right-2  z-100 `}
              // backgroundColor={isLiked ? "red" : "#ACACAC"}
            />
          )}
        </div>

        <div className=" ">
          <h2 className="  lg:font-semibold text-black lg:text-[14px] line-clamp-2 ">
            {item.description}
          </h2>
          <div className="flex justify-between items-end ">
            <div>
              <del className="text-[18px] text-[#ACACAC] font-normal ">
                {item.price} сум
              </del>
              <h3 className="text-[20px] text-black font-semibold">{a} сум</h3>
            </div>
            <div aria-disabled={true}>
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
