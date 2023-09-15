import { GetServerSideProps } from "next";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Item from "@/components/Item";

import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch("https://dummyjson.com/products/" + params?.id);
  const responsive = await fetch("https://dummyjson.com/products/");

  const data = await res.json();
  const array = await responsive.json();

  return {
    props: {
      data: data,
      array: array.products,
    },
  };
};

const UserPage: React.FC = ({ data, array }: any) => {
  let a = 0;

  function persantagePrice() {
    let price = (data.price / 100) * data.discountPercentage;
    let p = data.price - Math.round(price);
    a = p;
  }

  persantagePrice();

  const [count, setCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(data.price);
  const [skidka, setSkidka] = useState(a);

  const plusItemCount = () => {
    setCount(count + 1);
    let b = itemPrice;
    let c = skidka;

    b += data.price;
    c += a;

    setItemPrice(b);
    setSkidka(c);
  };
  const minusItemCount = () => {
    setCount(count - 1);

    let b = itemPrice;
    let c = skidka;

    b -= data.price;
    c -= a;
    setItemPrice(b);
    setSkidka(c);
  };

  const itemCarzine = (i: any) => {
    let karzine: any = JSON.parse(localStorage.getItem("karzine") || "[]");
    let prices: any = JSON.parse(localStorage.getItem("prices") || "[]");
    karzine.push(i);
    prices.push({
      id: i.id,
      price: a,
      realPrice: data.price,
    });

    localStorage.setItem("karzine", JSON.stringify(karzine));
    localStorage.setItem("prices", JSON.stringify(prices));
  };

  return (
    <div>
      <Navbar />
      <div className="w-[100%] mt-10 mx-auto sm:px-4  md:px-10 lg:px-14 xl:px-24 ">
        <div className="w-full flex-col lg:flex  lg:flex-row lg:justify-center lg:gap-14 mb-24 ">
          <div className=" w-[90%]  h-1/3 mx-auto lg:mx-0 lg:w-1/3 lg:h-[500px] ">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper  "
            >
              <SwiperSlide>
                <img src={data.images[1]} alt="" className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={data.images[1]} alt="" className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={data.images[1]} alt="" className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={data.images[1]} alt="" className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={data.images[1]} alt="" className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={data.images[1]} alt="" className="object-cover" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="text-start py-6 w-[90%] mx-auto lg:w-2/3 ">
            <h1 className="text-black text-2xl font-semibold lg:text-3xl mb-6 ">
              {data.description}
            </h1>
            <h1 className="text-black text-3xl font-semibold mb-6 ">
              {skidka} ${" "}
              <del className="text-[21px] text-[#ACACAC] font-medium relative bottom-2  ">
                {itemPrice} $
              </del>{" "}
            </h1>
            <div className="w-full h-10  lg:w-28 lg:h-8 rounded border border-solid border-[#ACACAC] flex justify-around items-center mb-9 ">
              <button
                disabled={count <= 1}
                onClick={minusItemCount}
                className="text-black text-base font-semibold cursor-pointer "
              >
                -
              </button>
              {count}
              <button
                onClick={plusItemCount}
                className="text-black text-base font-semibold cursor-pointer"
              >
                +
              </button>
            </div>

            <hr className="mb-6" />

            <p className="text-black mb-8 font-normal text-lg lg:w-[700px] lg:mb-4 line-clamp-5 ">
              Станьте востребованным разработчиком. Вы изучите основы
              программирования и основные концепции компьютерных наук, цифровые
              технологии, операционные системы, программное обеспечение, базы
              данных, системы аналитики, языки программирования и многое другое.
              Познакомитесь с тестированием и системным анализом. На программе
              сможете сделать осознанный выбор специализации и технологий,
              прокачаться в выбранном направлении.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => itemCarzine(data)}
                className="w-52 h-9 bg-[#7000FF] text-white rounded "
              >
                Добавить в корзину
              </button>
              <button className="w-52 h-9 border-2 border-solid border-[#7000FF] text-[#7000FF] font-semibold rounded ">
                Добавить в избранное
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[90%] text-justify lg:w-2/3 mx-auto mb-10 ">
          <h1 className="text-black text-3xl font-semibold mb-6">
            Описание товара{" "}
          </h1>
          <p className="text-black font-normal text-lg w-full mb-4 line-clamp-6 lg:line-clamp-none ">
            Стиральный порошок Tide Lenor Touch подходит для использования в
            стиральных машинах любого типа. Сочетание очищающего эффекта порошка
            и смягчающего эффекта Lenor делает вещи безупречно чистыми, нежными
            и свежими. Стирайте согласно рекомендациям на ярлыках текстильных
            изделий. Рекомендованный режим стирки — от 20 минут при температуре
            воды 30 C и выше. Обратите внимание: порошок не предназначен для
            стирки изделий из шерсти и шелка. Синтетическое моющее средство
            порошкообразное для использования в стиральных машинах любого типа.
            Рекомендованная температура стирки указана на ярлыках текстильных
            изделий. Не перегружайте стиральную машину. Оставьте зазор в ширину
            ладони между загруженным бельем и барабаном. Белье будет двигаться
            свободно, стирка будет более эффективной.
          </p>
        </div>

        <div>
          <h1 className="text-black font-semibold text-3xl ml-5 lg:text-4xl mb-6">
            Похожие товары
          </h1>

          <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5   p-4 gap-4 mb-5 ">
            {array.map((i: any) =>
              i.category === data.category ? <Item key={i.id} item={i} /> : ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
