/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import Link from "next/link";

export default function Item(props: any) {
  const { item, cartUpdate, update } = props;
  const [isLiked, setIsLiked] = useState<any>(false);
  const [isInCard, setIsInCard] = useState<any>(false);
  const [active, setActive] = useState<any>(false);
  let a = 0;

  function persantagePrice() {
    let price = (item.price / 100) * item.discountPercentage;
    let p = item.price - Math.round(price);
    a = p;
  }

  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("liked") || "[]");
    let b = JSON.parse(localStorage.getItem("karzine") || "[]");

    for (let i = 0; i < a.length; i++) {
      if (a[i].id === item.id) {
        setIsLiked(true);
      }
    }

    for (let i = 0; i < b.length; i++) {
      if (b[i].id === item.id) {
        setIsInCard(true);
      }
    }
  }, []);

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

    if (!active) {
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

    setActive(!active);
    setIsInCard(!isInCard);
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
            />
          )}
        </div>

        <div className=" relative h-28">
          <h2 className="  lg:font-semibold text-black lg:text-[14px] line-clamp-2 ">
            {item.description}
          </h2>
          <div className=" absolute bottom-0 w-full ">
            <div className="flex justify-between items-end relative  ">
              <div>
                <del className="text-[18px] text-[#ACACAC] font-normal ">
                  {item.price} сум
                </del>
                <h3 className="text-[20px] text-black font-semibold">
                  {a} сум
                </h3>
              </div>
              {isInCard ? (
                <div className="" aria-disabled={true}>
                  <BsCartCheckFill
                    className="border border-solid border-[#ACACAC] text-[32px] rounded-full p-2 cursor-pointer "
                    onClick={() => itemCarzine(item)}
                  />
                </div>
              ) : (
                <div className="" aria-disabled={true}>
                  <CgShoppingCart
                    className="border border-solid border-[#ACACAC] text-[32px] rounded-full p-2 cursor-pointer "
                    onClick={() => itemCarzine(item)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
