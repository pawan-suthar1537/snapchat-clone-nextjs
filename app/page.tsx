import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFFC00] h-screen">
      <Navbar/>
      <Header/>
    </div>
  );
}
