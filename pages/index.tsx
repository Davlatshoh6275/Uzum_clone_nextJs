import Navbar from "@/components/Navbar";
import SwiperCom from "@/components/SwiperCom";
import Producs from "@/components/Producs";
import { useState, createContext, useContext } from "react";

export const carzinCounter = createContext<any>(false);

export default function Home() {

  let a = useContext(carzinCounter)
  const [update, setUpdate] = useState(a);

  return (
    <main>
      <carzinCounter.Provider value={update}>
        <Navbar />
        <SwiperCom />
        <Producs cartUpdate={setUpdate} update={update} />
      </carzinCounter.Provider>
    </main>
  );
}
