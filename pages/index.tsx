import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import SwiperCom from "@/components/SwiperCom";
import Producs from "@/components/Producs";
import Liked from "./liked/[id]";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Navbar/>
      <SwiperCom/>
      <Producs/>
      <Liked/>
      {/* <Link href="/about">About us</Link> */}
    </main>
  );
}
