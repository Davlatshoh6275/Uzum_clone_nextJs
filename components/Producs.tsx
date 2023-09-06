import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import Item from "./Item";

const inter = Montserrat({ subsets: ["latin"] });

const Producs: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("./api/hello")
      .then((res) => res.json())
      .then((res) => setData(res.producs));
  }, []);

  return (
    <div className="w-[100%] m-0 mx-auto sm:px-4  md:px-10 lg:px-14 xl:px-24 ">
      <h1
        className={`text-black text-3xl  sm:text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Популярное
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "Популярное" ? <Item key={item.id} item={item} /> : ""
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
        {data.map((item) =>
          item.category === "Спортивная одежда" ? <Item key={item.id} item={item} /> : ""
        )}
      </div>
      <h1
        className={`text-black text-3xl font-semibold  mb-10 ${inter.className}`}
      >
        Активный отдых
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "Активный отдых" ? <Item key={item.id} item={item} /> : ""
        )}
      </div>
      <h1
        className={`text-black text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Спортивная одежда
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "Спортивная одежда" ? <Item key={item.id} item={item} /> : ""
        )}
      </div>
      <h1
        className={`text-black text-3xl font-semibold mb-10 ${inter.className}`}
      >
        Активный отдых
      </h1>
      <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
        {data.map((item) =>
          item.category === "Активный отдых" ? <Item key={item.id} item={item} /> : ""
        )}
      </div>
    </div>
  );
};

export default Producs;
