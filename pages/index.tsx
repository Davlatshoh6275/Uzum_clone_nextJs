import Navbar from "@/components/Navbar";
import SwiperCom from "@/components/SwiperCom";
import Producs from "@/components/Producs";
import { useState, useEffect } from "react";

export default function Home() {
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("karzine") || "[]");

    setUpdate(a.length);
  }, []);

  return (
    <main>
      <Navbar update={update} />
      <SwiperCom />
      <Producs cartUpdate={setUpdate} update={update} />
    </main>
  );
}
