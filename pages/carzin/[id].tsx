import React, { useState } from "react";

export default function Item(props: any) {
  const { item, deleteItem, total, setTotal } = props;

  const [count, setCount] = useState(1);

  const plusItemCount = (item: any) => {
    setCount(count + 1);
    let a  = total
    
    a += parseFloat(item.discountPrice)

    console.log(a);
    
    setTotal(a)
  };
  const minusItemCount = (item: any) => {
    setCount(count - 1);

    let a  = total
    
    a -= parseFloat(item.discountPrice)

    console.log(a);
    
    setTotal(a)
  };
  return (
    <div key={item.id} className="flex items-center gap-4  mb-4 ">
      <div className="border border-solid border-[#FEFEFE] rounded-xl" >
        <img src={item.images[0]} alt="" className="w-40 h-48 rounded-xl object-cover object-top  "  />
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="text-black text-xl font-medium w-2/3 ">
          {item.description}
        </p>
        <h2 className="text-black text-base font-bold ">
          {item.price} $
        </h2>
        <div className="w-20 h-8 rounded border border-solid border-[#ACACAC] flex justify-around items-center  ">
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
          className=" w-20 text-[#33C] text-[14px] font-semibold border border-solid  rounded px-3 py-1 bg-[#EAEAF9]  "
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
