import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import SwiperCom from "@/components/SwiperCom";
import Producs from "@/components/Producs";
import Liked from "./liked/[id]";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <SwiperCom />
      <Producs />
      <Liked />
    </main>
  );
}
