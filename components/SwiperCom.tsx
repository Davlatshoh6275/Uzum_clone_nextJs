import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const SwiperCom: React.FC = () => {
  return (
    <div className=" w-[90%] sm:px-4 sm:w-[90%] lg:w-[100%]  md:px-10 lg:px-14 xl:px-24  h-[400px] flex justify-center items-center m-0 mx-auto mb-24   ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-3xl"
      >
        <SwiperSlide
          className=" relative "
          style={{
            background: "linear-gradient(70deg, #9643FF 0%, #5200BA 100%)",
          }}
        >

          <div className=" w-[70%] sm:w-[70%]  md:w-[70%] lg:w-[90%]  h-[200px]  absolute top-24 left-[50px] text-left ">
            <h1 className="text-xl md:text-3xl font-semibold text-white mb-3 ">
              Подсолнечное масло
            </h1>
            <h3 className="text-white text-2xl font-semibold mb-3 ">
              30,000 сум
            </h3>
            <p className="text-white text-[14px] line-clamp-5 lg:w-3/4">
              Станьте востребованным разработчиком. Вы изучите основы
              программирования и основные концепции компьютерных наук, цифровые
              технологии, операционные системы, программное обеспечение, базы
              данных, системы аналитики, языки программирования и многое другое.
              Познакомитесь с тестированием и системным анализом. На программе
              сможете сделать осознанный выбор специализации и технологий,
              прокачаться в выбранном направлении.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className=" relative "
          style={{
            background: "linear-gradient(70deg, #9643FF 0%, #5200BA 100%)",
          }}
        >
          <div className=" w-[70%] sm:w-[70%]  md:w-[70%] lg:w-[90%]  h-[200px]  absolute top-24 left-[50px] text-left ">
            <h1 className="text-xl md:text-3xl font-semibold text-white mb-3 ">
              Подсолнечное масло
            </h1>
            <h3 className="text-white text-2xl font-semibold mb-3 ">
              30,000 сум
            </h3>
            <p className="text-white text-[14px] line-clamp-5 lg:w-3/4 ">
              Станьте востребованным разработчиком. Вы изучите основы
              программирования и основные концепции компьютерных наук, цифровые
              технологии, операционные системы, программное обеспечение, базы
              данных, системы аналитики, языки программирования и многое другое.
              Познакомитесь с тестированием и системным анализом. На программе
              сможете сделать осознанный выбор специализации и технологий,
              прокачаться в выбранном направлении.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className=" relative "
          style={{
            background: "linear-gradient(70deg, #9643FF 0%, #5200BA 100%)",
          }}
        >
          <div className=" w-[70%] sm:w-[70%]  md:w-[70%] lg:w-[90%]  h-[200px]  absolute top-24 left-[50px] text-left ">
            <h1 className="text-xl md:text-3xl font-semibold text-white mb-3 ">
              Подсолнечное масло
            </h1>
            <h3 className="text-white text-2xl font-semibold mb-3 ">
              30,000 сум
            </h3>
            <p className="text-white text-[14px] line-clamp-5 lg:w-3/4">
              Станьте востребованным разработчиком. Вы изучите основы
              программирования и основные концепции компьютерных наук, цифровые
              технологии, операционные системы, программное обеспечение, базы
              данных, системы аналитики, языки программирования и многое другое.
              Познакомитесь с тестированием и системным анализом. На программе
              сможете сделать осознанный выбор специализации и технологий,
              прокачаться в выбранном направлении.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className=" relative "
          style={{
            background: "linear-gradient(70deg, #9643FF 0%, #5200BA 100%)",
          }}
        >
          <div className=" w-[70%] sm:w-[70%]  md:w-[70%] lg:w-[90%]  h-[200px]  absolute top-24 left-[50px] text-left ">
            <h1 className="text-xl md:text-3xl font-semibold text-white mb-3 ">
              Подсолнечное масло
            </h1>
            <h3 className="text-white text-2xl font-semibold mb-3 ">
              30,000 сум
            </h3>
            <p className="text-white text-[14px] line-clamp-5 lg:w-3/4">
              Станьте востребованным разработчиком. Вы изучите основы
              программирования и основные концепции компьютерных наук, цифровые
              технологии, операционные системы, программное обеспечение, базы
              данных, системы аналитики, языки программирования и многое другое.
              Познакомитесь с тестированием и системным анализом. На программе
              сможете сделать осознанный выбор специализации и технологий,
              прокачаться в выбранном направлении.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className=" relative "
          style={{
            background: "linear-gradient(70deg, #9643FF 0%, #5200BA 100%)",
          }}
        >
          <div className=" w-[70%] sm:w-[70%]  md:w-[70%] lg:w-[90%]  h-[200px]  absolute top-24 left-[50px] text-left ">
            <h1 className="text-xl md:text-3xl font-semibold text-white mb-3 ">
              Подсолнечное масло
            </h1>
            <h3 className="text-white text-2xl font-semibold mb-3 ">
              30,000 сум
            </h3>
            <p className="text-white text-[14px] line-clamp-5 lg:w-3/4">
              Станьте востребованным разработчиком. Вы изучите основы
              программирования и основные концепции компьютерных наук, цифровые
              технологии, операционные системы, программное обеспечение, базы
              данных, системы аналитики, языки программирования и многое другое.
              Познакомитесь с тестированием и системным анализом. На программе
              сможете сделать осознанный выбор специализации и технологий,
              прокачаться в выбранном направлении.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className=" relative "
          style={{
            background: "linear-gradient(70deg, #9643FF 0%, #5200BA 100%)",
          }}
        >
          <div className=" w-[70%] sm:w-[70%]  md:w-[70%] lg:w-[90%]  h-[200px]  absolute top-24 left-[50px] text-left ">
            <h1 className="text-xl md:text-3xl font-semibold text-white mb-3 ">
              Подсолнечное масло
            </h1>
            <h3 className="text-white text-2xl font-semibold mb-3 ">
              30,000 сум
            </h3>
            <p className="text-white text-[14px] line-clamp-5 lg:w-3/4">
              Станьте востребованным разработчиком. Вы изучите основы
              программирования и основные концепции компьютерных наук, цифровые
              технологии, операционные системы, программное обеспечение, базы
              данных, системы аналитики, языки программирования и многое другое.
              Познакомитесь с тестированием и системным анализом. На программе
              сможете сделать осознанный выбор специализации и технологий,
              прокачаться в выбранном направлении.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className=" relative "
          style={{
            background: "linear-gradient(70deg, #9643FF 0%, #5200BA 100%)",
          }}
        >
          <div className=" w-[70%] sm:w-[70%]  md:w-[70%] lg:w-[90%]  h-[200px]  absolute top-24 left-[50px] text-left ">
            <h1 className="text-xl md:text-3xl font-semibold text-white mb-3 ">
              Подсолнечное масло
            </h1>
            <h3 className="text-white text-2xl font-semibold mb-3 ">
              30,000 сум
            </h3>
            <p className="text-white text-[14px] line-clamp-5 lg:w-3/4">
              Станьте востребованным разработчиком. Вы изучите основы
              программирования и основные концепции компьютерных наук, цифровые
              технологии, операционные системы, программное обеспечение, базы
              данных, системы аналитики, языки программирования и многое другое.
              Познакомитесь с тестированием и системным анализом. На программе
              сможете сделать осознанный выбор специализации и технологий,
              прокачаться в выбранном направлении.
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default SwiperCom;
