import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import Item from "./Item";

const inter = Montserrat({ subsets: ["latin"] });

interface Props {
  cartUpdate: Function;
  update: boolean
}

const Producs: React.FC<Props> = ({ cartUpdate, update }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  return (
    <div className="w-[100%] m-0 mx-auto sm:px-4  md:px-10 lg:px-14 xl:px-24 ">
      <h1
        className={`text-black text-3xl  sm:text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Smartphones
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "smartphones" ? (
            <Item key={item.id} item={item} cartUpdate={cartUpdate} update={update}  />
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
        Laptops
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "laptops" ? (
            <Item key={item.id} item={item} cartUpdate={cartUpdate} update={update}/>
          ) : (
            ""
          )
        )}
      </div>

      <h1
        className={`text-black text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Fragrances
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "fragrances" ? (
            <Item key={item.id} item={item} cartUpdate={cartUpdate} update={update}/>
          ) : (
            ""
          )
        )}
      </div>
      <h1
        className={`text-black text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Skincare
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "skincare" ? (
            <Item key={item.id} item={item} cartUpdate={cartUpdate} update={update}/>
          ) : (
            ""
          )
        )}
      </div>
      <h1
        className={`text-black text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Groceries
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "groceries" ? (
            <Item key={item.id} item={item} cartUpdate={cartUpdate} update={update}/>
          ) : (
            ""
          )
        )}
      </div>
      <h1
        className={`text-black text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Home Decoration
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "home-decoration" ? (
            <Item key={item.id} item={item} cartUpdate={cartUpdate} update={update}/>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Producs;
