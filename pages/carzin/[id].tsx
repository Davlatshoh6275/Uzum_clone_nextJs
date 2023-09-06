import React, { useState } from "react";
import Image from "next/image";
import img from "../../public/img/karzin.png";
import kalonka from "../../public/img/kalonka.png";

export default function Item(props: any) {
  const [count, setCount] = useState(1);

  const item = props.item;
  const deleteItem = props.deleteItem
  return (
    <div key={item.id} className="flex items-center gap-4  mb-4 ">
      <div>
        <Image src={kalonka} alt="img" width={"143"} />
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="text-black text-xl font-medium ">
          Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг
        </p>
        <h2 className="text-black text-base font-bold ">
          {item.discountPrice} сум
        </h2>
        <div className="w-20 h-8 rounded border border-solid border-[#ACACAC] flex justify-around items-center  ">
          <button
            disabled={count <= 1}
            onClick={() => setCount(count - 1)}
            className="text-black text-base font-semibold cursor-pointer "
          >
            -
          </button>
          {count}
          <button
            onClick={() => setCount(count + 1)}
            className="text-black text-base font-semibold cursor-pointer"
          >
            +
          </button>
        </div>
        <button onClick={() => deleteItem(item.id)}  className=" w-20 text-[#33C] text-[14px] font-semibold border border-solid  rounded px-3 py-1 bg-[#EAEAF9]  ">
          Удалить
        </button>
      </div>
    </div>
  );
}
