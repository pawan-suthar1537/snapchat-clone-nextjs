import React from "react";
import image from "@/public/imagee.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { ImLaptop } from "react-icons/im";



const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <div>
        <h1 className="text-7xl font-medium"  >
          Snapchat is <br /> now on the
          <br /> web!
        </h1>
        <h1 className="my-5 text-xl">
          Chat, Snap, and video call your friends. Watch Stories and Spotlight,
          <br />
          all from your computer.
        </h1>
        <Button className="gap-2 rounded-full"><ImLaptop />
Login to Chat</Button>
      </div>
      <div>
        <Image src={image} alt="logo" width={650} height={650} />
      </div>
    </div>
  );
};

export default Header;
