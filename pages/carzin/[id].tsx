/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

export default function Item(props: any) {
  const { item, deleteItem, total, setTotal, prices, key, data } = props;

  let a;

  function persantagePrice() {
    let price = (item.price / 100) * item.discountPercentage;
    let p = item.price - Math.round(price);
    a = p;
  }
  persantagePrice();

  const [count, setCount] = useState(item.count);

  const plusItemCount = (item: any) => {
    setCount(count + 1);
    let a = total;
    item.count++;

    for (let i of prices) {
      if (i.id === item.id) {
        a += i.price;
        setTotal(a);
      }
    }

    localStorage.setItem("karzine", JSON.stringify(data));
  };
  const minusItemCount = (item: any) => {
    setCount(count - 1);

    let a = total;
    item.count--;

    for (let i of prices) {
      if (i.id === item.id) {
        a -= i.price;
        setTotal(a);
      }
    }

    localStorage.setItem("karzine", JSON.stringify(data));
  };
  return (
    <div key={key} className="flex items-center gap-4  mb-4 ">
      <div className="border border-solid border-[#FEFEFE] rounded-xl">
        <img
          src={item.images[0]}
          alt=""
          className="w-40 h-48 rounded-xl object-cover object-center  "
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="text-black font-normal text-base lg:text-xl lg:font-medium lg:w-2/3 ">
          {item.description}
        </p>
        <h2 className="text-black text-base font-bold ">{a} $</h2>
        <div className="w-full md:w-20 h-8 rounded border border-solid border-[#ACACAC] flex justify-around items-center  ">
          <button
            disabled={count <= 1}
            onClick={() => minusItemCount(item)}
            className="text-black text-base font-semibold cursor-pointer "
          >
            -
          </button>
          {count}
          <button
            onClick={() => plusItemCount(item)}
            className="text-black text-base font-semibold cursor-pointer"
          >
            +
          </button>
        </div>
        <button
          onClick={() => deleteItem(item.id)}
          className=" w-full md:w-20 text-[#33C] text-[14px] font-semibold border border-solid  rounded px-3 py-1 bg-[#EAEAF9]  "
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
