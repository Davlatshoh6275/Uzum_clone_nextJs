import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import img from "../../public/img/karzin.png";
import kalonka from "../../public/img/kalonka.png";
import Item from "./[id]";


const Carzin: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [prices, setPrices] = useState<any[]>([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("karzine") || "[]");
    let arrPrice = JSON.parse(localStorage.getItem("prices") || "[]");
    let o = [];

    if (arrPrice.length !== 0) {
      for (let i = 0; i < arrPrice.length; i++) {
        o.push(arrPrice[i].price);
      }

      let t = o.reduce((prev, item) => {
        return (prev += item);
      });

      setTotal(t)
    }

    setPrices(arrPrice);
    setData(a);
  }, []);

  const deleteItem = (id: any) => {
    let a = data.filter((item) => item.id !== id);
    let b = prices.filter((item) => item.id !== id);
    setData(a);
    setPrices(b);
    localStorage.setItem("karzine", JSON.stringify(a));
    localStorage.setItem("prices", JSON.stringify(b));
  };

  return (
    <div>
      <Navbar />
      <div className="w-[100%] m-0 mx-auto sm:px-4  md:px-10 lg:px-14 xl:px-28 mb-6 ">
        <h1 className="text-black text-3xl font-semibold mt-5 mb-6 ">
          Корзина товаров
        </h1>
        {data.length !== 0 ? (
          <div className="flex justify-between gap-4  ">
            <div className="w-3/4 h-full border-2 borsder-solid border-[#D9D9D9] rounded-2xl px-9 py-11 ">
              {data.map((item: any) => (
                <Item item={item} deleteItem={deleteItem} />
              ))}
            </div>
            <div className=" w-[25%] h-full border-2 borsder-solid border-[#D9D9D9] rounded-2xl px-9 py-11">
              <h1 className="text-4xl text-black font-semibold " >{total} сум</h1>
              {/* <p>Итого товаров: {data.length}</p> */}
              <p>Итого скидки: 244 000 сум</p>
            </div>
          </div>
        ) : (
          <div className="w-full h-[75vh] flex items-center justify-center flex-col ">
            <Image src={img} alt="img" width={"100"} />
            <h1 className="text-black text-3xl font-semibold ">
              В корзине пока нет товаров
            </h1>
            <p className="text-black text-base font-medium">
              Начните с подборок на главной странице или найдите нужный товар
              через поиск
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carzin;
