import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

export default function Item(props: any) {
  const { item } = props;
  const [isLiked, setIsLiked] = useState();
  let a = 0;

  function persantagePrice() {
    let price = (item.price / 100) * item.discountPercentage;
    let p = item.price - Math.round(price);
    a = p;
  }

  const itemLiked = (id: any) => {
    let arrID: any = JSON.parse(localStorage.getItem("id") || "[]");
    arrID.push(id);
    localStorage.setItem("id", JSON.stringify(arrID));

    setIsLiked(arrID.includes(id));
  };

  const itemCarzine = (i: any) => {
    let karzine: any = JSON.parse(localStorage.getItem("karzine") || "[]");
    let prices: any = JSON.parse(localStorage.getItem("prices") || "[]");
    karzine.push(i);
    prices.push({
      id: i.id,
      price: a,
      realPrice: item.price,
    });

    localStorage.setItem("karzine", JSON.stringify(karzine));
    localStorage.setItem("prices", JSON.stringify(prices));
  };

  persantagePrice();
  return (
    <div>
      <div key={item.id} className=" h-full mb-5  ">
        <div className="relative">
          <Link href={`/product/${item.id}`} className="z-0">
            <div className="mb-3 relative  ">
              <img
                src={item.images[0]}
                alt=""
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
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
